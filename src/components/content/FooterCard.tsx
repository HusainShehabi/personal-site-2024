import React from "react";
import Cloud from "../../assets/Cloud-ffvii-battle.png";

export default function FooterCard() {
  return (
    <div className="font-light text-sm text-gray-300 flex col-span-2 opacity-90 w-full items-center">
      <div className=" mr-6">
        <img
          src={Cloud}
          alt={"Cloud Strife"}
          className="w-auto h-auto sm:w-28"
        />
      </div>
      <div className="justify-center">
        <p>
          Built with{" "}
          <a
            className="font-medium text-white"
            href="https://create-react-app.dev/"
          >
            Create React App
          </a>{" "}
          and{" "}
          <a className="font-medium text-white" href="https://tailwindcss.com/">
            Tailwind CSS.
          </a>{" "}
          Deployed with{" "}
          <a className="font-medium text-white" href="https://www.netlify.com/">
            Netlify
          </a>{" "}
          and animated using{" "}
          <a
            className="font-medium text-white"
            href="https://www.framer.com/motion/"
          >
            Framer Motion
          </a>
          .
        </p>
      </div>
    </div>
  );
}
