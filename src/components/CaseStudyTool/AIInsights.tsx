// src/components/CaseStudyTool/AIInsights.tsx

import React from 'react';

const AIInsights = ({ insights }) => {
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-bold">AI-Generated Insights</h2>
      <p className="mt-2"><strong>Summary:</strong> {insights.summary}</p>
      <p className="mt-2"><strong>Recommendations:</strong> {insights.recommendations}</p>
    </div>
  );
};

export default AIInsights;
