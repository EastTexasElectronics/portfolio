// src/components/CaseStudyTool/call-to-action.tsx

import React from 'react';

export function CallToAction(): React.JSX.Element {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-700 to-fuchsia-700 text-neutral-100 py-12">
      <div className="max-w-5xl mx-auto p-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get Started Today</h2>
        <p className="text-lg mb-6">Start using the Case Study Tool and unlock the full potential of your data.</p>
        <a
          href="#"
          className="px-6 py-3 bg-neutral-900 text-neutral-100 rounded-full font-bold text-lg hover:bg-neutral-700 transition"
        >
          Sign Up Now
        </a>
      </div>
    </section>
  );
}
