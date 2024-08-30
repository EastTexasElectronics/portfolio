// src/pages/create-company-launch-case-study.tsx
import { CreateCaseStudyForm } from "@/components/CaseStudyTool/CreateCaseStudyForm";

export default function CreateCompanyLaunchCaseStudyPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <h1 className="text-xl font-semibold tracking-tight sm:grow-0">
              Create Company Launch Case Study
            </h1>
            <CreateCaseStudyForm />
          </div>
        </main>
      </div>
    </div>
  );
}
