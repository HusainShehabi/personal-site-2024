import React from "react";
import ExperienceItem from "./ExperienceItem";
import { data } from "../../data";

export default function ExperienceCard() {
  return (
    <div className="w-full font-sans text-2xl text-gray-300">
      <div className="flex flex-col">
        <div className="font-semibold text-4xl text-gray-300">Experience</div>
        {data.map((item) => (
          <ExperienceItem
            date={item.date}
            role={item.role}
            organization={item.organization}
            description={item.description}
            technologies={item.technologies}
          />
        ))}
      </div>
    </div>
  );
}
