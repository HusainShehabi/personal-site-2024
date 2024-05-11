import React from "react";

type Props = {
  date: string;
  role: string;
  organization: string;
  description: string;
  technologies: string[];
};

export default function ExperienceItem({
  date,
  role,
  organization,
  description,
  technologies,
}: Props) {
  const containerStyle = {
    padding: "20px",
    margin: "10px 0",
  };

  return (
    <div style={containerStyle} className="overflow-hidden">
      <div className="text-sm">
        <p className="text-gray-300">{date}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-white">
          {role} • {organization}
        </h3>
        <p className="text-gray-300 text-sm">{description}</p>
        <div className="flex flex-wrap mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-800 text-white text-xs font-medium mx-1 my-1 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
