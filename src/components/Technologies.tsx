import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiSocketdotio,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiDocker,
  SiCplusplus,
  SiPostman,
} from "react-icons/si";
import { ShineBorder } from "./magicui/shine-border";

const tech = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Socket.io", icon: SiSocketdotio },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Postgres", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "C++", icon: SiCplusplus },
  { name: "Postman", icon: SiPostman },
];

const Technologies = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 relative mt-8 rounded-xl">
      <h2 className="text-3xl font-bold mb-6 pl-5">Technologies I Use</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {tech.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl shadow-md w-28"
            >
              <Icon className="text-3xl" />
              <span className="text-sm font-medium text-center">{item.name}</span>
            </div>
          );
        })}
      </div>
      <ShineBorder shineColor={"white"}/>
    </div>
  );
};

export default Technologies;
