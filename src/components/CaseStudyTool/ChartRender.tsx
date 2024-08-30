// src/components/CaseStudyTool/ChartRender.tsx

import React from 'react';
import Plot from 'react-plotly.js';

const ChartRender = ({ data }) => {
  // Example chart data - Replace with dynamic data based on user input
  const chartData = [
    {
      x: data.map((d) => d.dataField),
      y: data.map((d) => d.value),
      type: 'bar',
    },
  ];

  return (
    <div className="mt-4">
      <Plot
        data={chartData}
        layout={{ title: 'Generated Chart', autosize: true }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default ChartRender;
