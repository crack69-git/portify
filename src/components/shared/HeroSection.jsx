import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className=" grid grid-cols-3 gap-6 w-11/12 mx-auto rounded-lg">
        <div className="mockup-code w-full bg-[#131313] col-span-2">
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
            <h1 className="text-6xl font-bold X">
              Hello <span className="text-green-600">There!</span>
            </h1>
            <h3 className="text-4xl font-bold mb-3">I'm JHON</h3>
            <p className="text-[16px] text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, magni, corrupti esse tempore unde omnis blanditiis
              nostrum fuga velit reiciendis voluptates natus saepe cum
              cupiditate molestiae dicta dolores iusto sunt! Beatae quaerat
              commodi doloribus enim dolorem illo a esse optio laboriosam
              voluptatum numquam, ad repellendus vel tempore ipsum qui odit?
            </p>
            <div className="flex gap-4 mt-5">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-[#131313] text-neutral-content w-96">
            <div className="card-body ">System Information</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
