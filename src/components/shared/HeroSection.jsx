import Image from "next/image";
import React from "react";
import profile from "@/assets/profile.png";
import { Contact, FolderGit2 } from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import linkedin from "@/assets/logo/html.png";
import codeforces from "@/assets/logo/codeforces.png";
import codechef from "@/assets/logo/codechef.png";
import github from "@/assets/logo/github.png";
const fetchData = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  return await res.json();
};
const HeroSection = async () => {
  const data = await fetchData();
  console.log(data.projects[0].name);
  const { name, description, profile } = data.projects[0];
  const code = data.projects[0].external;
  const images = (
    <>
      <div className="border-4 border-gray-700 p-2 rounded-lg mr-3">
        <Image
          src={linkedin}
          alt="linkedin"
          width={100}
          height={100}
          className="rounded-lg mx-auto "
        />
        <p className="text-center">HTML</p>
      </div>
      <div className="border-4 border-gray-700 p-2 rounded-lg mr-3">
        <Image
          src={linkedin}
          alt="linkedin"
          width={100}
          height={100}
          className="rounded-lg mx-auto "
        />
        <p className="text-center">HTML</p>
      </div>
      <div className="border-4 border-gray-700 p-2 rounded-lg mr-3">
        <Image
          src={linkedin}
          alt="linkedin"
          width={100}
          height={100}
          className="rounded-lg mx-auto "
        />
        <p className="text-center">HTML</p>
      </div>
      <div className="border-4 border-gray-700 p-2 rounded-lg mr-3">
        <Image
          src={linkedin}
          alt="linkedin"
          width={100}
          height={100}
          className="rounded-lg mx-auto "
        />
        <p className="text-center">HTML</p>
      </div>
      <div className="border-4 border-gray-700 p-2 rounded-lg mr-3">
        <Image
          src={linkedin}
          alt="linkedin"
          width={100}
          height={100}
          className="rounded-lg mx-auto "
        />
        <p className="text-center">HTML</p>
      </div>
      <div className="border-4 border-gray-700 p-2 rounded-lg mr-3">
        <Image
          src={linkedin}
          alt="linkedin"
          width={100}
          height={100}
          className="rounded-lg mx-auto "
        />
        <p className="text-center">HTML</p>
      </div>
    </>
  );
  return (
    <div>
      <div className="grid max-sm:grid-cols-2 grid-cols-3 items-stretch gap-6 w-11/12 mx-auto rounded-lg">
        <div className="mockup-code w-full h-full bg-[#131313] col-span-2">
          <pre data-prefix="$">
            <code>npm install user profile</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>Installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Installation complete!</code>
          </pre>
          <div className="w-11/12 mx-auto pt-10">
            <h1 className="text-9xl font-bold">
              Hello <span className="text-green-600">There!</span>
            </h1>
            <h3 className="text-6xl font-bold mb-3">I&apos;m {name}</h3>
            <p className="text-xl text-gray-300">{description}</p>
            <div className="flex gap-4 mt-10">
              <Link href="/projects">
                <button className="btn btn-success text-black">
                  <FolderGit2 />
                  View Projects
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn btn-soft text-green-400">
                  <Contact />
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="card h-full bg-[#131313] text-neutral-content">
            <div className="card-body h-full">
              <pre data-prefix="$">
                <code className="text-2xl">System Information</code>
              </pre>

              <div className="relative mb-5">
                <Image
                  src={profile}
                  alt="profile"
                  width={200}
                  height={200}
                  className="rounded-lg mx-auto border-4 border-gray-700"
                />
                <div className="badge badge-soft badge-accent absolute top-2 left-10 font-semibold">
                  <div className="inline-grid *:[grid-area:1/1]">
                    <div className="status status-success animate-ping"></div>
                    <div className="status status-success"></div>
                  </div>
                  Active Now
                </div>
              </div>
              <div>
                <div>
                  <p className="text-xl text-gray-400">
                    Projects:{" "}
                    <span className="text-xl font-bold text-white">
                      {data.projects[0].project.length}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-xl text-gray-400">
                    Experience:{" "}
                    <span className="text-xl font-bold text-white">
                      {data.projects[0].Experience} years
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <p className="text-xl text-gray-400">
                    Core Skills:{" "}
                    <span className="text-xl font-bold text-white">
                      {data.projects[0].core.map((skill, index) => (
                        <span key={index}>{skill} , </span>
                      ))}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-xl text-gray-400">
                    Position Interested In:{" "}
                    <span className="text-xl font-bold text-white">
                      {data.projects[0].Position}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-300 border border-gray-600 card-sm shadow-sm w-11/12 mx-auto my-5 p-4">
        <div className="card-body">
          <div className="flex items-center gap-3">
            <h2 className="card-title text-5xl font-bold">About Me</h2>
            <p className="h-0.5 border border-gray-600"></p>
          </div>
          <p className="text-xl">
            I am a passionate and dedicated software developer with a strong
            foundation in computer science and a keen interest in web
            development. With a solid understanding of programming languages
            such as JavaScript, I have honed my skills through various projects
            . I am particularly enthusiastic about building responsive and
            user-friendly web applications using modern frameworks like React
            and Next.js. My experience includes working on both frontend and
            backend development, allowing me to create seamless and efficient
            solutions. I am eager to contribute my skills and creativity to a
            dynamic team, where I can continue to grow as a developer and make a
            meaningful impact in the tech industry.
          </p>
        </div>
      </div>
      {/* <div className="w-11/12 mx-auto border-t border-b border-gray-700 my-10 py-5 ">
        <Marquee
          className="mask-l-from-90% mask-r-from-90%"
          gradient={false}
          speed={50}
        >
          {images}
        </Marquee>
      </div> */}
      {/* <div className="w-11/12 mx-auto grid grid-cols-2 gap-6 text-center my-5">
        {code.map((item, index) => (
          <div
            className="card bg-base-300 border border-gray-600 card-sm shadow-sm"
            key={index}
          >
            <div className="card-body">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-full border bg-white border-green-600 mx-auto mb-3"
              />
              <h2 className="card-title text-2xl font-bold">{item.name}</h2>
              <div className="text-start text-lg">
                <p>
                  <span className="font-bold text-gray-400">Rating:</span>{" "}
                  {item.Rating}
                </p>
                <p>
                  <span className="font-bold text-gray-400">Max Rating:</span>{" "}
                  {item.MaxRating}
                </p>
                <p>
                  <span className="font-bold text-gray-400">Rank:</span>{" "}
                  {item.Rank}
                </p>
                <p>
                  <span className="font-bold text-gray-400">
                    Problem Solved:
                  </span>{" "}
                  {item.ProblemsSolved}
                </p>
              </div>
              <div className="justify-end card-actions">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">Visit Profile</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default HeroSection;
