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
          I am currently pursuing my Bachelor of Science in Computer Science &
          Engineering at Port City International University (PCIU). My academic
          journey has been marked by a strong commitment to learning and a
          passion for technology. I have consistently maintained a high CGPA and
          have been actively involved in various research projects and academic
          activities. My focus has been on exploring the latest advancements in
          computer science, particularly in the areas of machine learning and
          artificial intelligence. I am dedicated to expanding my knowledge and
          skills to contribute meaningfully to the field of computer science.
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
                  Understanding Sentiment in Chatgaiya Dialect: A Comparative
                  Study of Classical vs SLM Approache
                </p>
                <p className="min-w-fit">2026-Present</p>
              </div>
              <p>
                <span className="font-bold text-lg">
                  Supervisor: MD. Meharab Hossain
                </span>{" "}
                <br></br>Assistant Professor, Department of Computer Science &
                Engineering<br></br> Port City International University (PCIU)
              </p>
              <p>Author: MD. Shakil Uddin, MD. Tamim, Ashutosh Tanchangya</p>
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
