import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export function DFCTroubleshootingSection() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Permission Issues:</AccordionTrigger>
                    <AccordionContent>
                        If you encounter permission issues when trying to access files or directories, ensure that you have granted Full Disk Access to the Data File Converter app.
                        You can do this by navigating to your macOS System Preferences, selecting &quot;Security &amp; Privacy&quot;, and adding the app under the &quot;Full Disk Access&quot; section.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Manual Path Entry Issues:</AccordionTrigger>
                    <AccordionContent>
                        When manually entering the path to the input file, double-check that you have the correct permissions for the directory.
                        The app may need Full Disk Access to read and write files in certain locations, which can be configured in your macOS settings.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>No files found in the selected directory:</AccordionTrigger>
                    <AccordionContent>
                        Ensure that the selected directory is accessible and contains files that the app can process.
                        Verify that the directory is not empty and that you have the necessary permissions to access it. If you&apos;re trying to process specific file types, ensure that those files are present in the directory.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>File Conversion Issues:</AccordionTrigger>
                    <AccordionContent>
                        If you encounter issues during file conversion, such as unsupported formats or failed conversions, ensure that the input file is in a supported format.
                        Also, double-check the output format settings and any options selected during the conversion process. Consult the app&apos;s documentation for details on supported formats and options.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Output File Issues:</AccordionTrigger>
                    <AccordionContent>
                        Ensure that the output file path is writable and that the directory exists. The app will attempt to save the converted file to the specified location, so make sure that you have the necessary permissions and that the path is valid.
                        By default, the file will be saved in the input directory unless you specify another location.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>Understanding Conversion Options:</AccordionTrigger>
                    <AccordionContent>
                        Each conversion option available in the app (e.g., Trim Data, Parse Types, Ignore Empty Fields) is designed to tailor the output to your specific needs.
                        For detailed explanations of each option and how they affect the conversion process, please refer to the app&apos;s <Link href="https://github.com/your-github-repo/wiki/Conversion-Options" className="text-blue-500 hover:underline">documentation</Link>.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>Formatting the Output:</AccordionTrigger>
                    <AccordionContent>
                        Depending on the selected output format (e.g., JSON, CSV, YAML), the app will structure the converted data accordingly.
                        Make sure to choose the format that best fits your needs. For example, CSV is ideal for tabular data, while JSON is better suited for hierarchical data structures.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
