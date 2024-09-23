// src/components/s2l-troubleshooting-section.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { track } from '@vercel/analytics';

export function S2lTroubleshootingSection() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <Accordion type="single" collapsible>

                <AccordionItem value="item-1">
                    <AccordionTrigger onClick={() => track('Troubleshooting Item Clicked', { item: 'No SVG files found' })}>
                        No SVG files found:
                    </AccordionTrigger>
                    <AccordionContent>
                        Make sure the input directory contains SVG files and that they have the correct file .svg extension and the directory is accessible and writable.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger onClick={() => track('Troubleshooting Item Clicked', { item: 'Conversion Errors' })}>
                        Conversion Errors:
                    </AccordionTrigger>
                    <AccordionContent>
                        Check the feedback modal for specific error messages. The most common error is when the SVG file cannot be found.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger onClick={() => track('Troubleshooting Item Clicked', { item: 'Output Directory Issues' })}>
                        Output Directory Issues:
                    </AccordionTrigger>
                    <AccordionContent>
                        By default, the output directory is set to the same directory as the input directory. Make sure the output directory is accessible and writable.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger onClick={() => track('Troubleshooting Item Clicked', { item: 'What is Prefix for?' })}>
                        What is Prefix for?
                    </AccordionTrigger>
                    <AccordionContent>
                        The prefix is used to add a prefix to the file name. For example, if you set the prefix to &quot;icon-&quot;, the file name will be &quot;icon-arrow.svg&quot;.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger onClick={() => track('Troubleshooting Item Clicked', { item: 'What is Class for?' })}>
                        What is Class for?
                    </AccordionTrigger>
                    <AccordionContent>
                        The class is used to add the CSS class to the SVG element. For example, you can set the class to &quot;icon icon-arrow&quot;.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger onClick={() => track('Troubleshooting Item Clicked', { item: 'What is Fill for?' })}>
                        What is Fill for?
                    </AccordionTrigger>
                    <AccordionContent>
                        To render an SVG file in Liquid format, it needs to have an attribute similar to fill inside the &lt;path&gt; tag. Learn more about the fill attribute <Link href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill" className="text-blue-500 hover:underline">here</Link>.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger onClick={() => track('Troubleshooting Item Clicked', { item: 'What is viewBox for?' })}>
                        What is viewBox for?
                    </AccordionTrigger>
                    <AccordionContent>
                        The viewBox is used to size your image using the tag inside the &lt;svg&gt; tag. For example, you can set the viewport to &quot;0 0 24 24&quot;. To learn more about the viewBox attribute, <Link href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox" className="text-blue-500 hover:underline">click here</Link>.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
