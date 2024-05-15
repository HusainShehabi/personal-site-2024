import React from "react";
import PFP from "../../assets/profilepic.jpeg";

export default function IntroductionCard() {
  return (
    <div className="w-full h-full font-sans text-2xl text-gray-300">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 row-span-3 font-sans font-semibold text-3xl xl:text-6xl text-gray-300 p-10 pb-0 pl-5">
          Husain Shehabi
        </div>
        <div className="col-span-2 pt-0 pl-5">
          <p className="text-xl">
            I'm a <b className="underline"> full-stack developer</b> with{" "}
            <b className="underline">3 years</b> of experience. I enjoy building
            appealing and interactive sites & apps.
          </p>
        </div>
        <div className="col-span-2 row-span-12 text-base ml-5 mr-5">
          <p>
            My interest in development and programming stemmed from my love of
            video games. From a young age, I was fascinated by how games
            combined stunning visuals with intricate mechanics to create
            immersive experiences. This passion drove me to explore coding and
            web development, where I discovered the joy of merging art and
            engineering. Today, I strive to create software that not only
            functions seamlessly but also offers an aesthetically pleasing
            experience, blending the best of both worlds.
          </p>
        </div>
      </div>
    </div>
  );
}
