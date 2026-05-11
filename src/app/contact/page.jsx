import { AtSign, MapPinCheck, Phone, Send } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-5xl font-bold mt-10">Contact Me</h2>
      <p className="mt-5 ml-4 border-l-4 border-green-500 pl-4 mb-5 rounded-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta
        eaque perferendis blanditiis impedit fugiat omnis dolorem. Doloribus
        accusantium veniam deserunt quibusdam cupiditate libero numquam,
      </p>
      <div className="grid grid-cols-3 gap-10">
        <div className="mockup-code w-full col-span-2">
          <div className="pl-10">
            <p>const user = [</p>
            <p className="pl-6">
              Name: <span className="text-accent font-semibold">"Jhon"</span>
            </p>
            <p className="pl-6">
              status:{" "}
              <span className="text-accent font-semibold">"active"</span>{" "}
            </p>
            <p className="pl-6">
              availability:{" "}
              <span className="text-accent font-semibold">
                "Remote/Hybrid"
              </span>{" "}
            </p>
            <p className="pl-6">
              Position:{" "}
              <span className="text-accent font-semibold">
                "Full Stack Developer"
              </span>{" "}
            </p>
            <p>]</p>
            <div className="mt-10 text-[16px]">
              <p className="flex gap-2 mb-2">
                <AtSign className="" />
                <span className="font-semibold">Email: </span> john@example.com
              </p>
              <p className="flex gap-2">
                <Phone />
                <span className="font-semibold mb-2">Phone: </span> +1 234 567
                890
              </p>
              <p className="flex gap-2 w-full">
                <MapPinCheck />
                <span className="font-semibold"> Location: </span> New York, USA
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 border rounded-2xl border-gray-700">
          {/* message section */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <p className="text-xl font-semibold">Contact me</p>
            <label className="label">Your Name</label>
            <input type="text" className="input" placeholder="Name" />

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Message</label>
            <textarea className="textarea" placeholder="Message" />

            <button className="btn btn-neutral mt-4">
              {" "}
              <Send className="mr-2" />
              Send Message
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default page;
