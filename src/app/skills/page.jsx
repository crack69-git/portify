import TechStackSection from "@/components/shared/TechStackSection";
import React from "react";

const SkillPage = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <div>
        <h2 className="text-4xl font-bold">Technical Skills</h2>
        <p className="text-lg text-gray-300">
          Here are the technologies and frameworks I'm proficient in:
        </p>
        <p className="h-0.5 w-full border border-gray-600 my-4"></p>
        <TechStackSection></TechStackSection>
      </div>
    </div>
  );
};

export default SkillPage;
