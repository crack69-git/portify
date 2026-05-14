import { CircleUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const fetchData = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  return await res.json();
};
const RightSection = async () => {
  const data = await fetchData();
  const profile = data.projects[0];
  const links = (
    <>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/projects">
        <li>Project</li>
      </Link>
      <Link href="/academic">
        <li>Academic Journey</li>
      </Link>
      <Link href="/skills">
        <li>Skills</li>
      </Link>
      <Link href="/certification">
        <li>Certification</li>
      </Link>
      <Link href="/contact">
        <li>Contact</li>
      </Link>
    </>
  );
  return (
    <div className="max-sm:hidden">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        {/* <div className="drawer-content flex flex-col items-center justify-center">
          Page content here
          <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
            Open drawer
          </label>
        </div> */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4 gap-4">
            <div className="flex items-center gap-4 pb-5 border-b border-gray-600">
              <Image
                src={profile.profile}
                alt="profile"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="text-green-400 font-semibold text-xl">
                  {profile.name}
                </p>
                <p>{profile.email}</p>
              </div>
            </div>
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
