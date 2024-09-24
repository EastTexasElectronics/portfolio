/**
 * This component is from https://ui.shadcn.com/docs/components/badge
 * Rewritten for better performance, type safety, and modularity.
 * To change color settings, please refer to your /styles/globals.css file.
 */

"use client";

import { useCallback, useEffect, useReducer, type Dispatch } from "react";
import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

/** Maximum number of toasts visible at once */
const TOAST_LIMIT = 1;
/** Delay before removing the toast from the DOM */
const TOAST_REMOVE_DELAY = 5000;

/**
 * Extends ToastProps to include additional properties for internal use
 */
type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

/**
 * Defines the possible action types for the toast reducer
 */
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

/**
 * Defines the structure of actions that can be dispatched to the reducer
 */
type Action =
  | { type: typeof actionTypes.ADD_TOAST; toast: ToasterToast }
  | { type: typeof actionTypes.UPDATE_TOAST; toast: Partial<ToasterToast> }
  | { type: typeof actionTypes.DISMISS_TOAST; toastId?: string }
  | { type: typeof actionTypes.REMOVE_TOAST; toastId?: string };

/**
 * Defines the structure of the toast state
 */
interface State {
  toasts: ToasterToast[];
}

/** Map to store timeouts for toast removal */
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

/**
 * Adds a toast to the removal queue
 * @param toastId - The ID of the toast to be removed
 */
const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

/**
 * Reducer function to handle toast state updates
 * @param state - The current state
 * @param action - The action to be applied
 * @returns The new state after applying the action
 */
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      };

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action;

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

let count = 0;

/**
 * Generates a unique ID for each toast
 * @returns A string representation of the unique ID
 */
const genId = (): string => {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
};

/** Initial state for the toast reducer */
const initialState: State = { toasts: [] };
/** Set of listener functions to be called on state updates */
const listeners = new Set<Dispatch<Action>>();

/** Current state stored in memory */
let memoryState: State = initialState;

/**
 * Dispatches an action to update the state and notifies all listeners
 * @param action - The action to be dispatched
 */
const dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(action);
  });
};

/** Type definition for the toast function parameters */
type Toast = Omit<ToasterToast, "id">;

/**
 * Creates and manages a new toast
 * @param props - The properties of the toast to be created
 * @returns An object with methods to control the created toast
 */
const toast = ({ ...props }: Toast) => {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...props, id },
    });
  const dismiss = () =>
    dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
};

/**
 * Custom hook to access and manage toasts
 * @returns An object containing the current toast state and methods to manage toasts
 */
const useToast = () => {
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    listeners.add(setState);
    return () => {
      listeners.delete(setState);
    };
  }, [setState]);

  return {
    ...state,
    toast,
    dismiss: useCallback(
      (toastId?: string) =>
        dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
      [],
    ),
  };
};

export { useToast, toast };
export type { ToasterToast };
