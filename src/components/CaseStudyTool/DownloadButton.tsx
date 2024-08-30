// src/components/CaseStudyTool/DownloadButton.tsx

import React from 'react';

const DownloadButton = ({ chartsData, aiInsights }) => {
  const handleDownload = () => {
    // Logic to export data, charts, and AI insights as PDF or DOCX
    // Placeholder logic: console log the data to simulate download
    console.log("Download data:", { chartsData, aiInsights });
    alert("Download initiated!");
  };

  return (
    <button onClick={handleDownload} className="bg-green-500 text-white py-2 px-4 rounded">
      Download Report
    </button>
  );
};

export default DownloadButton;
