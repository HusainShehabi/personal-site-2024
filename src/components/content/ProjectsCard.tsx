import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../libs/projects";

type Props = {};

export default function ProjectsCard({}: Props) {
  return (
    <div className="w-full font-sans text-2xl text-gray-300">
      <div className="flex flex-col">
        <div className="font-semibold text-4xl text-gray-300">Projects</div>
        {projects.map((project) => (
          <ProjectItem
            title={project.title}
            Description={project.Description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
