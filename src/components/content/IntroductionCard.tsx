import React from "react";

export default function IntroductionCard() {
  return (
    <div className="w-full h-full font-sans text-2xl text-gray-300">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 row-span-3 font-sans font-semibold text-6xl text-gray-300 p-10 pb-0 pl-5">
          Husain Shehabi
        </div>
        <div className="col-span-2 row-span-1 ml-5 mt-0">
          FullStack Developer
        </div>
        <div className="col-span-2 row-span-12 text-base ml-5 mr-5">
          <p>
            I'm a <b>full-stack developer</b> with <b>3 years</b> of experience.
            I enjoy building appealing and interactive sites & apps.
          </p>
        </div>

        <div className="col-span-1 row-span-3 text-base ml-5 mr-5">
          When I’m not at the computer, I’m usually rock climbing, reading,
          hanging out with my wife and two cats, or running around Hyrule
          searching for Korok seeds K o r o k s e e d s .
        </div>
        <div className="col-span-1 row-span-3 text-base ml-5 mr-5">
          When I’m not at the computer, I’m usually rock climbing, reading,
          hanging out with my wife and two cats, or running around Hyrule
          searching for Korok seeds K o r o k s e e d s .
        </div>
      </div>
    </div>
  );
}
