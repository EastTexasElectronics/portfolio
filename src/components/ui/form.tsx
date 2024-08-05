'use client';

import React from 'react';
import type * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

/**
 * Form component that provides context for form state and validation.
 */
const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

/**
 * FormField component that wraps the react-hook-form Controller and provides context.
 *
 * @template TFieldValues - The type of the form values.
 * @template TName - The type of the field name.
 * @param {ControllerProps<TFieldValues, TName>} props - Props for the FormField component.
 * @returns {React.JSX.Element} The FormField component.
 */
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>): React.JSX.Element => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

/**
 * Custom hook to access form field context.
 *
 * @returns {object} The form field context.
 */
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

/**
 * FormItem component that provides context for form items.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props for the FormItem component.
 * @param {React.Ref<HTMLDivElement>} ref - Reference to the div element.
 * @returns {React.JSX.Element} The FormItem component.
 */
const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn('space-y-2', className)} {...props} />
      </FormItemContext.Provider>
    );
  }
);
FormItem.displayName = 'FormItem';

/**
 * FormLabel component that wraps the Radix UI Label component and provides context.
 *
 * @param {React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>} props - Props for the FormLabel component.
 * @param {React.Ref<React.ElementRef<typeof LabelPrimitive.Root>>} ref - Reference to the label element.
 * @returns {React.JSX.Element} The FormLabel component.
 */
const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = 'FormLabel';

/**
 * FormControl component that wraps the Radix UI Slot component and provides context.
 *
 * @param {React.ComponentPropsWithoutRef<typeof Slot>} props - Props for the FormControl component.
 * @param {React.Ref<React.ElementRef<typeof Slot>>} ref - Reference to the slot element.
 * @returns {React.JSX.Element} The FormControl component.
 */
const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = 'FormControl';

/**
 * FormDescription component for displaying form descriptions.
 *
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - Props for the FormDescription component.
 * @param {React.Ref<HTMLParagraphElement>} ref - Reference to the paragraph element.
 * @returns {React.JSX.Element} The FormDescription component.
 */
const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return (
      <p
        ref={ref}
        id={formDescriptionId}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
      />
    );
  }
);
FormDescription.displayName = 'FormDescription';

/**
 * FormMessage component for displaying form messages.
 *
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - Props for the FormMessage component.
 * @param {React.Ref<HTMLParagraphElement>} ref - Reference to the paragraph element.
 * @returns {React.JSX.Element} The FormMessage component.
 */
const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn('text-sm font-medium text-destructive', className)}
        {...props}
      >
        {body}
      </p>
    );
  }
);
FormMessage.displayName = 'FormMessage';

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
