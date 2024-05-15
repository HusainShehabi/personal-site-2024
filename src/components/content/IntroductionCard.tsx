import React from "react";
import PFP from "../../assets/profilepic.jpeg";

export default function IntroductionCard() {
  return (
    <div className="w-full h-full font-sans text-2xl text-gray-300">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 row-span-3 font-sans font-semibold text-6xl text-gray-300 p-10 pb-0 pl-5">
          Husain Shehabi
        </div>
        <div className="col-span-2 row-span-1 ml-5 mt-0 flex items-center">
          <img
            src={PFP}
            alt="Profile"
            className="w-32 h-32 rounded-full mr-4 border border-green-500 "
          />
          <div>
            <p>
              I'm a <b className="underline"> full-stack developer</b> with{" "}
              <b className="underline">3 years</b> of experience. I enjoy
              building appealing and interactive sites & apps.
            </p>
          </div>
        </div>
        <div className="col-span-2 row-span-12 text-base ml-5 mr-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vehicula libero eu lorem feugiat, nec ultricies eros interdum. In
            hac habitasse platea dictumst. Maecenas ac risus vel ligula
            malesuada commodo. Curabitur dapibus, enim ut egestas fermentum,
            libero justo auctor urna, a pulvinar odio magna nec felis. Nulla
            facilisi. Duis tincidunt malesuada orci, ut fringilla libero
            sagittis et. Sed sed posuere nisi. Curabitur nec libero vitae felis
            tincidunt suscipit. Fusce imperdiet, metus sit amet auctor
            venenatis, dolor tortor tristique elit, at consectetur metus eros
            eget velit. Quisque ut leo ut mauris gravida fermentum non vel
            sapien. Duis non turpis sit amet leo congue pharetra.
          </p>
        </div>
      </div>
    </div>
  );
}
