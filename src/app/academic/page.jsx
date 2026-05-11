import { Cpu } from "lucide-react";
import React from "react";

const ExperiencePage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="border-l-5 pl-6 border-green-400 py-2">
        <div className="badge badge-soft badge-accent font-semibold py-5">
          <div className="status status-error animate-ping"></div>
          Academic Track
        </div>
        <h2 className="text-5xl font-bold my-5">My Academic Journey</h2>
        <p className="w-6/12 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti
          commodi inventore temporibus aut pariatur nesciunt veniam deserunt
          veritatis enim!
        </p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <p className="text-xl font-semibold text-green-100">2022-2026</p>
          <h4 className="text-4xl font-bold text-green-500">
            Bachelor of Science in<br></br> Computer Science & Engineering
          </h4>
          <p className="text-xl font-bold mt-5 ">
            PCIU - Port City International University
          </p>
        </div>
        <div className="badge badge-soft flex flex-col h-full p-3">
          <p className="text-lg font-bold text-green-500 ">CGPA Index</p>
          <p className="text-3xl font-bold text-white">
            3.46 / <span className="text-green-500 text-xl">4.00</span>
          </p>
        </div>
      </div>

      <div className="w-7/12">
        <p className="text-xl font-bold mt-20 ">Research Focus</p>
        <p className="h-0.5 border border-gray-700 my-3"></p>
        <div>
          <div className="card w-full bg-[#131313] card-md shadow-sm">
            <div className="card-body">
              <div className="flex justify-between items-start gap-4">
                <p className="card-title text-2xl">
                  Classification of Soild,crop and fertilizers based on their
                  properties using Machine Learning
                </p>
                <p className="min-w-fit">2026-Present</p>
              </div>
              <p>
                <span className="font-bold text-lg">Supervisor:</span> Dr. John
                Doe
              </p>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-between items-center">
                <div className="flex gap-2 flex-wrap">
                  <p className="badge badge-soft badge-accent">Pytorch</p>
                  <p className="badge badge-soft badge-accent">
                    Machine Learning
                  </p>
                  <p className="badge badge-soft badge-accent">SLM</p>
                </div>
                <button className="btn btn-soft">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
