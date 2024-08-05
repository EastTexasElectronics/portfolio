'use client';

import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

/**
 * SelectTrigger component that renders a trigger button for the select menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>} props - Props for the SelectTrigger component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {React.ReactNode} props.children - Children elements.
 * @param {React.Ref<React.ElementRef<typeof SelectPrimitive.Trigger>>} ref - Reference to the trigger element.
 * @returns {React.JSX.Element} The SelectTrigger component.
 */
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref): React.JSX.Element => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

/**
 * SelectScrollUpButton component that renders a scroll up button for the select menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>} props - Props for the SelectScrollUpButton component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {React.Ref<React.ElementRef<typeof SelectPrimitive.ScrollUpButton>>} ref - Reference to the scroll up button element.
 * @returns {React.JSX.Element} The SelectScrollUpButton component.
 */
const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref): React.JSX.Element => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

/**
 * SelectScrollDownButton component that renders a scroll down button for the select menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>} props - Props for the SelectScrollDownButton component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {React.Ref<React.ElementRef<typeof SelectPrimitive.ScrollDownButton>>} ref - Reference to the scroll down button element.
 * @returns {React.JSX.Element} The SelectScrollDownButton component.
 */
const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref): React.JSX.Element => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

/**
 * SelectContent component that renders the content of the select menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>} props - Props for the SelectContent component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {React.ReactNode} props.children - Children elements.
 * @param {React.ElementRef<typeof SelectPrimitive.Content>} ref - Reference to the content element.
 * @param {'popper' | 'position'} [props.position='popper'] - Position of the select content.
 * @returns {React.JSX.Element} The SelectContent component.
 */
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref): React.JSX.Element => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
        'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
          'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

/**
 * SelectLabel component that renders a label for the select menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>} props - Props for the SelectLabel component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {React.Ref<React.ElementRef<typeof SelectPrimitive.Label>>} ref - Reference to the label element.
 * @returns {React.JSX.Element} The SelectLabel component.
 */
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref): React.JSX.Element => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

/**
 * SelectItem component that renders an item in the select menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>} props - Props for the SelectItem component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {React.ReactNode} props.children - Children elements.
 * @param {React.Ref<React.ElementRef<typeof SelectPrimitive.Item>>} ref - Reference to the item element.
 * @returns {React.JSX.Element} The SelectItem component.
 */
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref): React.JSX.Element => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

/**
 * SelectSeparator component that renders a separator in the select menu.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>} props - Props for the SelectSeparator component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {React.Ref<React.ElementRef<typeof SelectPrimitive.Separator>>} ref - Reference to the separator element.
 * @returns {React.JSX.Element} The SelectSeparator component.
 */
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref): React.JSX.Element => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
