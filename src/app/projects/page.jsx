import Image from "next/image";
import React from "react";
import github from "@/assets/github.png";
import { RadioTower } from "lucide-react";
import Link from "next/link";
const fetchData = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  return await res.json();
};
const ProjectPage = async () => {
  const data = await fetchData();
  const projects = data.projects[0].project;
  // console.log(project);
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex items-center gap-2">
        <p className="h-1 w-15 bg-green-600"></p>
        <p className="text-lime-500 font-semibold">Archive.Repository</p>
      </div>
      <h2 className="text-5xl font-bold mt-5">Project Gallery</h2>
      <p className="text-gray-300 mt-3 mb-5">
        Explore my latest projects and contributions to open-source
        repositories.
      </p>
      <div className="grid grid-cols-1 gap-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#131313] p-4 rounded-2xl">
            <div className="flex items-center gap-5">
              <iframe
                width="760"
                height="215"
                src="https://tiles-wgl2.vercel.app/" // replace with your video ID
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl shadow-lg"
              ></iframe>
              <div>
                <h4 className="text-2xl font-bold">{project.ProjectName}</h4>
                <p className="mt-3">{project.ProjectDescription}</p>
                <div className="flex justify-between items-center gap-10">
                  <div className="flex items-center gap-3 mt-5 flex-wrap">
                    {project.StackUsed.map((skill, index) => (
                      <p className="badge badge-soft badge-success" key={index}>
                        {skill}
                      </p>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href={project.GithubRepo} target="_blank">
                      <button className="btn btn-accent mt-5 text-white">
                        <Image
                          src={github}
                          alt="GitHub"
                          width={20}
                          height={20}
                        />
                        Github
                      </button>
                    </Link>
                    <Link href={project.ProjectLink} target="_blank">
                      <button className="btn btn-soft btn-success mt-5">
                        <RadioTower />
                        Live View
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
