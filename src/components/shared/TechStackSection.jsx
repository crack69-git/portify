import React from "react";

const TechStackSection = () => {
  return (
    <div className="w-11/12 mx-auto mt-6">
      {/* <div className="flex items-center gap-5">
        <h1 className="text-5xl font-bold min-w-fit">Tech Stack</h1>
        <p className="h-0.5 w-full border border-gray-600"></p>
      </div> */}
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="bg-[#131313] p-4 rounded-lg">
          <h4 className="text-2xl font-bold ">frontend</h4>
          <p className="h-0.5 bg-gray-800 w-full my-3"></p>
          <div className="flex flex-wrap gap-3">
            <p className="badge badge-accent badge-soft">html</p>
            <p className="badge badge-accent badge-soft">css</p>
            <p className="badge badge-accent badge-soft">javascript</p>
          </div>
        </div>
        <div className="bg-[#131313] p-4 rounded-lg">
          <h4 className="text-2xl font-bold ">backend</h4>
          <p className="h-0.5 bg-gray-800 w-full my-3"></p>
          <div className="flex flex-wrap gap-3">
            <p className="badge badge-accent badge-soft">node.js</p>
            <p className="badge badge-accent badge-soft">express</p>
          </div>
        </div>
        <div className="bg-[#131313] p-4 rounded-lg">
          <h4 className="text-2xl font-bold ">authentication</h4>
          <p className="h-0.5 bg-gray-800 w-full my-3"></p>
          <div className="flex flex-wrap gap-3">
            <p className="badge badge-accent badge-soft">BetterAuth</p>
            <p className="badge badge-accent badge-soft">OAuth</p>
          </div>
        </div>
        <div className="bg-[#131313] p-4 rounded-lg">
          <h4 className="text-2xl font-bold ">database</h4>
          <p className="h-0.5 bg-gray-800 w-full my-3"></p>
          <div className="flex flex-wrap gap-3">
            <p className="badge badge-accent badge-soft">mongodb</p>
            <p className="badge badge-accent badge-soft">postgresql</p>
          </div>
        </div>
        <div className="bg-[#131313] p-4 rounded-lg">
          <h4 className="text-2xl font-bold ">Framework</h4>
          <p className="h-0.5 bg-gray-800 w-full my-3"></p>
          <div className="flex flex-wrap gap-3">
            <p className="badge badge-accent badge-soft">Tailwind CSS</p>
            <p className="badge badge-accent badge-soft">React.js</p>
            <p className="badge badge-accent badge-soft">Next.js</p>
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
