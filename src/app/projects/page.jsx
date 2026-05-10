import Image from "next/image";
import React from "react";
import github from "@/assets/github.png";
import { RadioTower } from "lucide-react";
const ProjectPage = () => {
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
      <div>
        <div className="bg-[#131313] p-4">
          <h4 className="text-2xl font-bold">Project Name</h4>
          <p className="mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            voluptates, adipisci aut, veritatis aspernatur odio magni doloremque
            quasi suscipit deserunt ad minus magnam. Nobis eius consequatur
            dolores officiis non porro distinctio quia, aspernatur earum ea
            omnis dolore illo aperiam nisi tenetur repudiandae iusto optio.
          </p>
          <div className="flex justify-between items-center gap-10">
            <div className="flex items-center gap-3 mt-5 flex-wrap">
              <p className="badge badge-soft badge-success">React</p>
              <p className="badge badge-soft badge-success">Tailwind CSS</p>
              <p className="badge badge-soft badge-success">Next.js</p>
              <p className="badge badge-soft badge-success">BetterAuth</p>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-success mt-5">
                <Image src={github} alt="GitHub" width={20} height={20} />
                Github
              </button>
              <button className="btn btn-soft btn-success mt-5">
                <RadioTower />
                Live View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
