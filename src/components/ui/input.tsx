import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the Input component
 */
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Input component that renders a styled input element.
 *
 * @param {InputProps} props - Props for the Input component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {string} [props.type] - The type of input element.
 * @param {React.Ref<HTMLInputElement>} ref - Reference to the input element.
 * @returns {React.JSX.Element} The Input component.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref): React.JSX.Element => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
