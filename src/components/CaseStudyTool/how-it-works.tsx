// src/components/CaseStudyTool/how-it-works.tsx

import React from 'react';

export function HowItWorks(): React.JSX.Element {
  return (
    <section className="bg-neutral-900 text-neutral-200 py-12">
      <div className="max-w-5xl mx-auto p-4 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Step 1: Input Data</h3>
            <p>Upload your CSV/Excel files or enter data manually through our easy-to-use form.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Step 2: Generate Charts</h3>
            <p>Select the type of charts you want to generate and visualize your data instantly.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Step 3: Get Insights</h3>
            <p>Receive AI-powered summaries and actionable insights tailored to your data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
