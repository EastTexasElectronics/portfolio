// src/components/CaseStudyTool/Hero.tsx

import React from "react";
import { Cover } from "../ui/cover";

export function CST_Hero() {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent text-white">
        Create Amazing Case Studies <br /> at <Cover>warp speed</Cover>
      </h1>
    </div>
  );
}
