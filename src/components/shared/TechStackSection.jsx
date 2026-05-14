import React from "react";
const fetchData = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  return await res.json();
};
const TechStackSection = async () => {
  const data = await fetchData();
  console.log(data.projects[0].skills);
  const skills = data.projects[0].skills;

  const frontendLanguages = skills.filter((s) => s.category === "Frontend");
  const frontendFrameworks = skills.filter((s) => s.category === "Framework");
  const backendFrameworks = skills.filter((s) => s.category === "Backend");
  const backendLibraries = skills.filter(
    (s) => s.category === "authentication",
  );
  // console.log(backendLibraries);
  const databases = skills.filter((s) => s.category === "Database");
  const programmingLanguages = skills.filter((s) => s.category === "others");

  return (
    <div className="w-11/12 mx-auto mt-6">
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="bg-[#131313] p-4 rounded-lg">
          <h4 className="text-2xl font-bold ">frontend</h4>
          <p className="h-0.5 bg-gray-800 w-full my-3"></p>
          <div className="flex flex-wrap gap-3">
            {frontendLanguages.map((skill, index) => (
              <p key={index} className="badge badge-accent badge-soft">
                {skill.name}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-[#131313] p-4 rounded-lg">
          <h4 className="text-2xl font-bold ">backend</h4>
          <p className="h-0.5 bg-gray-800 w-full my-3"></p>
          <div className="flex flex-wrap gap-3">
            {backendFrameworks.map((skill, index) => (
              <p key={`bf-${index}`} className="badge badge-accent badge-soft">
                {skill.name}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-[#131313] p-4 rounded-lg">
          <h4 className="text-2xl font-bold ">authentication</h4>
          <p className="h-0.5 bg-gray-800 w-full my-3"></p>
          <div className="flex flex-wrap gap-3">
            {backendLibraries.map((skill, index) => (
              <p key={index} className="badge badge-accent badge-soft">
                {skill.name}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-[#131313] p-4 rounded-lg">
          <h4 className="text-2xl font-bold ">database</h4>
          <p className="h-0.5 bg-gray-800 w-full my-3"></p>
          <div className="flex flex-wrap gap-3">
            {databases.map((skill, index) => (
              <p key={index} className="badge badge-accent badge-soft">
                {skill.name}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-[#131313] p-4 rounded-lg">
          <h4 className="text-2xl font-bold ">Framework</h4>
          <p className="h-0.5 bg-gray-800 w-full my-3"></p>
          <div className="flex flex-wrap gap-3">
            <p className="badge badge-accent badge-soft">Tailwind CSS</p>
            {frontendFrameworks.map((skill, index) => (
              <p key={index} className="badge badge-accent badge-soft">
                {skill.name}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-[#131313] p-4 rounded-lg">
          <h4 className="text-2xl font-bold ">Others</h4>
          <p className="h-0.5 bg-gray-800 w-full my-3"></p>
          <div className="flex flex-wrap gap-3">
            <p className="badge badge-accent badge-soft">C++</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
