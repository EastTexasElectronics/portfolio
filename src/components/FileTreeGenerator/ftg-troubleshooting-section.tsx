// src/components/ftg-troubleshooting-section.tsx

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export function FTGTroubleshootingSection() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                    <AccordionTrigger>Permission Issues:</AccordionTrigger>
                    <AccordionContent>
                        If you are encountering permission issues, ensure that you have granted Full Disk Access to the app. You can do this by going to your macOs settings and selecting the File Tree Generator app. This isnt required in all cases, but depending on your configuration it may be required.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Manual Path Entry:</AccordionTrigger>
                    <AccordionContent>
                        If you would like to manually type in the path to the input directory, ensure that you have read and write permissions for the directory. You will need to go to your macOs settings to grant Full Disk Access to the app.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                    <AccordionTrigger>No files found in directory:</AccordionTrigger>
                    <AccordionContent>
                        Ensure the selected directory is accessible and contains files. Verify that the directory is not empty and that you have read permissions.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>File Exclusion Issues:</AccordionTrigger>
                    <AccordionContent>
                        Double-check your exclusion patterns. Make sure the patterns are correctly formatted and match the files you want to exclude.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Output File Issues:</AccordionTrigger>
                    <AccordionContent>
                        Ensure the output file path is writable and the directory exists. By default, the file will be saved in the input directory unless specified otherwise.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Understanding Exclusion Patterns:</AccordionTrigger>
                    <AccordionContent>
                        Exclusion patterns help you filter out files or directories from the file tree. Learn more about pattern syntax in our <Link href="https://github.com/EastTexasElectronics/File-Tree-Generator/wiki/Exclusion-Patterns" className="text-blue-500 hover:underline">documentation</Link>.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Formatting the File Tree:</AccordionTrigger>
                    <AccordionContent>
                        Choose between Markdown and plain text formats. For Markdown, the file tree will be structured with indentation and icons for directories and files.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
