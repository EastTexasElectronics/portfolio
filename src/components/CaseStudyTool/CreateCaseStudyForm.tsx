'use client';

import Link from "next/link";
import {
  Home,
  Package,
  Package2,
  PanelLeft,
  Settings,
  ShoppingCart,
  Users2,
  Layout,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { frameworkQuestions, Framework } from "@/data/frameworkQuestions";

export function CreateCaseStudyForm() {
  const [selectedFrameworks, setSelectedFrameworks] = useState<Framework[]>([]);
  const [reportType, setReportType] = useState<"brief" | "detailed">("brief");
  const [customFields, setCustomFields] = useState<{ label: string; value: string }[]>([]);

  const frameworks = Object.keys(frameworkQuestions) as Framework[];

  const handleFrameworkChange = (selected: string[]) => {
    setSelectedFrameworks(selected as Framework[]);
  };

  const handleCustomFieldChange = (index: number, field: keyof { label: string; value: string }, value: string) => {
    const updatedFields = [...customFields];
    updatedFields[index][field] = value;
    setCustomFields(updatedFields);
  };

  const addCustomField = () => {
    setCustomFields([...customFields, { label: "", value: "" }]);
  };

  const renderFrameworkSpecificFields = () => {
    if (!Array.isArray(selectedFrameworks)) return null;

    return selectedFrameworks.map((framework) => {
      const questions = frameworkQuestions[framework];
      return (
        <Card key={framework} className="mt-4">
          <CardHeader>
            <CardTitle>{framework}</CardTitle>
            <CardDescription>
              Provide details relevant to the {framework}.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {questions.length > 0 ? (
                questions.map((question, index) => (
                  <div key={index} className="grid gap-2">
                    <Label>{question}</Label>
                    <Textarea placeholder={`Answer for: ${question}`} />
                  </div>
                ))
              ) : (
                <div className="grid gap-2">
                  <Label>No preset questions. Please add your own.</Label>
                  <Textarea placeholder="Custom input..." />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      );
    });
  };

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 w-14 flex flex-col border-r bg-background sm:w-16">
          <nav className="flex flex-col items-center gap-4 px-2 py-4">
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Case Study Tool</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Study Overview</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Study Overview</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Study Details</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Study Details</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Layout className="h-5 w-5" />
                  <span className="sr-only">Chart Data</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Chart Data</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Additional Data</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Additional Data</TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>
        </aside>

        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">Case Study Tool</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Study Overview
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Study Details
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    Chart Data
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Users2 className="h-5 w-5" />
                    Additional Data
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </header>

          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
              <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>Case Study Details</CardTitle>
                      <CardDescription>
                        Provide a detailed description for AI generation. For
                        example, "Create a case study for the launch of a gaming
                        controller focusing on market trends, consumer feedback,
                        and projected sales performance."
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">Project Name</Label>
                          <Input id="name" type="text" className="w-full" />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            placeholder="Provide a detailed description for AI generation..."
                            className="min-h-32"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="framework">Select Frameworks</Label>
                          <Select
                            onValueChange={(value) => handleFrameworkChange(value.split(','))}
                            value={selectedFrameworks.join(',')}
                          >
                            <SelectTrigger id="framework" aria-label="Select frameworks">
                              <SelectValue placeholder="Select frameworks" />
                            </SelectTrigger>
                            <SelectContent>
                              {frameworks.map((framework) => (
                                <SelectItem key={framework} value={framework}>
                                  {framework}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {renderFrameworkSpecificFields()}

                  <Card x-chunk="dashboard-07-chunk-custom-fields" className="mt-4">
                    <CardHeader>
                      <CardTitle>Custom Fields</CardTitle>
                      <CardDescription>
                        Add or modify any additional fields as needed.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {customFields.map((field, index) => (
                          <div key={index} className="grid grid-cols-2 gap-2">
                            <Input
                              value={field.label}
                              onChange={(e) =>
                                handleCustomFieldChange(index, "label", e.target.value)
                              }
                              placeholder="Field Label"
                            />
                            <Input
                              value={field.value}
                              onChange={(e) =>
                                handleCustomFieldChange(index, "value", e.target.value)
                              }
                              placeholder="Field Value"
                            />
                          </div>
                        ))}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={addCustomField}
                          className="mt-2"
                        >
                          Add Field
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                    <CardHeader>
                      <CardTitle>Case Report Type</CardTitle>
                      <CardDescription>
                        Select from one of the available report types below.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <Button
                          variant={reportType === "brief" ? "default" : "outline"}
                          onClick={() => setReportType("brief")}
                          className="w-full"
                        >
                          Brief Report
                        </Button>
                        <Button
                          variant={reportType === "detailed" ? "default" : "outline"}
                          onClick={() => setReportType("detailed")}
                          className="w-full"
                        >
                          Detailed Report
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Button size="sm">Save Progress</Button>
                <Button size="sm" variant="outline">
                  Next Step
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
