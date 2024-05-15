import React from "react";
import Cloud from "../../assets/Cloud-ffvii-battle.png";

export default function FooterCard() {
  return (
    <div className="font-light text-sm text-gray-300 flex col-span-2 m opacity-90">
      <div className=" mr-9">
        <img src={Cloud} alt={"Cloud Strife"} width={60} height={60} />
      </div>
      <div className="">
        <p>
          Built with{" "}
          <a
            className="font-medium text-white"
            href="https://create-react-app.dev/"
          >
            Create React App
          </a>
        </p>
        <p>
          and{" "}
          <a className="font-medium text-white" href="https://tailwindcss.com/">
            Tailwind CSS.
          </a>
        </p>
        <p>
          Deployed with{" "}
          <a className="font-medium text-white" href="https://www.netlify.com/">
            Netlify.
          </a>
        </p>
        <p>
          Animated using{" "}
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
