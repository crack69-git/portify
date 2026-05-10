import React from "react";

const RightSection = () => {
  const links = (
    <>
      <li>Home</li>
      <li>Project</li>
      <li>Experience</li>
      <li>Skills</li>
      <li>Certification</li>
      <li>Contact</li>
    </>
  );
  return (
    <div className="max-sm:hidden">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          {/* <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
            Open drawer
          </label> */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4 gap-4">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
