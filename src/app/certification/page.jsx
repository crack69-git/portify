import React from "react";

const CertificationPage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="badge badge-soft badge-warning h-full text-[16px] font-semibold">
        <div aria-label="success" className="status status-success"></div>Status
        : <span className="text-green-500">Validated</span>
      </div>
      <h1 className="text-5xl font-bold mt-5">Certifications</h1>
      <div>
        <p className="mt-5 ml-4 border-l-4 border-green-500 pl-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta
          eaque perferendis blanditiis impedit fugiat omnis dolorem. Doloribus
          accusantium veniam deserunt quibusdam cupiditate libero numquam,
        </p>
      </div>
      <div className=" flex gap-4 mt-10">
        <select defaultValue="Pick a color" className="select">
          <option disabled={true}>Filter by Type</option>
          <option>All</option>
          <option>Academic</option>
          <option>Others</option>
        </select>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
    </div>
  );
};

export default CertificationPage;
