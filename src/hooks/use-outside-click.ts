"use client";

import type React from "react";
import { useEffect } from "react";

type Event = MouseEvent | TouchEvent;

/**
 * Custom hook to detect clicks outside of a referenced element.
 *
 * @param {React.RefObject<HTMLElement>} ref - The ref of the element to detect outside clicks for.
 * @param {(event: Event) => void} callback - The callback function to call when an outside click is detected.
 */
export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: (event: Event) => void,
) => {
  useEffect(() => {
    /**
     * Listener function to handle the click event.
     *
     * @param {Event} event - The mouse or touch event.
     */
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or its descendants
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
