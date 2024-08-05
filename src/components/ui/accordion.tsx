'use client';

import React from 'react';
import {
    Root as AccordionRoot,
    Item as AccordionItemPrimitive,
    Trigger as AccordionTriggerPrimitive,
    Content as AccordionContentPrimitive,
} from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Accordion = AccordionRoot;

type AccordionItemProps = React.ComponentPropsWithoutRef<typeof AccordionItemPrimitive>;

/**
 * AccordionItem component that wraps Radix UI AccordionItem.
 *
 * @param {AccordionItemProps} props - Props for the AccordionItem component.
 * @param {string} props.className - Additional class names for styling.
 * @param {React.Ref<React.ElementRef<typeof AccordionItemPrimitive>>} ref - Reference to the component.
 */
const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionItemPrimitive>,
    AccordionItemProps
>(({ className, ...props }, ref) => (
    <AccordionItemPrimitive
        ref={ref}
        className={cn('border-b bg-gray-800 rounded-lg mb-2', className)}
        {...props}
    />
));
AccordionItem.displayName = 'AccordionItem';

type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof AccordionTriggerPrimitive>;

/**
 * AccordionTrigger component that wraps Radix UI AccordionTrigger.
 *
 * @param {AccordionTriggerProps} props - Props for the AccordionTrigger component.
 * @param {string} props.className - Additional class names for styling.
 * @param {React.ReactNode} props.children - Children elements.
 * @param {React.Ref<React.ElementRef<typeof AccordionTriggerPrimitive>>} ref - Reference to the component.
 */
const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionTriggerPrimitive>,
    AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
    <AccordionTriggerPrimitive
        ref={ref}
        className={cn(
            'flex flex-1 items-center justify-between py-4 px-6 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
            className
        )}
        {...props}
    >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionTriggerPrimitive>
));
AccordionTrigger.displayName = 'AccordionTrigger';

type AccordionContentProps = React.ComponentPropsWithoutRef<typeof AccordionContentPrimitive>;

/**
 * AccordionContent component that wraps Radix UI AccordionContent.
 *
 * @param {AccordionContentProps} props - Props for the AccordionContent component.
 * @param {string} props.className - Additional class names for styling.
 * @param {React.ReactNode} props.children - Children elements.
 * @param {React.Ref<React.ElementRef<typeof AccordionContentPrimitive>>} ref - Reference to the component.
 */
const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionContentPrimitive>,
    AccordionContentProps
>(({ className, children, ...props }, ref) => (
    <AccordionContentPrimitive
        ref={ref}
        className={cn(
            'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down px-6',
            className
        )}
        {...props}
    >
        <div className="pb-4 pt-0">{children}</div>
    </AccordionContentPrimitive>
));
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
