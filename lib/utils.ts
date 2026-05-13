import { interviewCovers, mappings } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const normalizeTechName = (tech: string) => {
  const key = tech
    .toLowerCase()
    .replace(/\.js$/, "")
    .replace(/[^\w+#]+/g, "");

  return mappings[key as keyof typeof mappings] ?? key;
};

const techIconMap: Record<string, string> = {
  react: "/tech-icons/react.svg",
  typescript: "/tech-icons/typescript.svg",
  nextjs: "/tech-icons/nextjs.svg",
  nodejs: "/tech-icons/nodejs.svg",
  mongodb: "/tech-icons/mongodb.svg",
  postgresql: "/tech-icons/postgresql.svg",
  docker: "/tech-icons/docker.svg",
  python: "/tech-icons/python.svg",
  figma: "/tech-icons/figma.svg",
  jira: "/tech-icons/jira.svg",
  mysql: "/tech-icons/mysql.svg",
  sql: "/tech-icons/mysql.svg",
  javascript: "/tech-icons/javascript.svg",
  tailwindcss: "/tech-icons/tailwindcss.svg",
  express: "/tech-icons/express.svg",
  tableau: "/tech-icons/tableau.svg",
  powerbi: "/tech-icons/powerbi.svg",
};

export const getTechLogos = async (techArray: string[]) => {
  return techArray.map((tech) => {
    const normalized = normalizeTechName(tech);

    return {
      tech,
      url: techIconMap[normalized] ?? "/tech.svg",
    };
  });
};

export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};
