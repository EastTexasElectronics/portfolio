import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the Textarea component.
 */
export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/**
 * Textarea component that renders a styled textarea element.
 *
 * @param {TextareaProps} props - Props for the Textarea component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {React.Ref<HTMLTextAreaElement>} ref - Reference to the textarea element.
 * @returns {React.JSX.Element} The Textarea component.
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref): React.JSX.Element => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
