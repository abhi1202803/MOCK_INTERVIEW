import { interviewCovers, mappings } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { assetPath } from "@/lib/assets";

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
  react: assetPath("/tech-icons/react.svg"),
  typescript: assetPath("/tech-icons/typescript.svg"),
  nextjs: assetPath("/tech-icons/nextjs.svg"),
  nodejs: assetPath("/tech-icons/nodejs.svg"),
  mongodb: assetPath("/tech-icons/mongodb.svg"),
  postgresql: assetPath("/tech-icons/postgresql.svg"),
  docker: assetPath("/tech-icons/docker.svg"),
  python: assetPath("/tech-icons/python.svg"),
  figma: assetPath("/tech-icons/figma.svg"),
  jira: assetPath("/tech-icons/jira.svg"),
  mysql: assetPath("/tech-icons/mysql.svg"),
  sql: assetPath("/tech-icons/mysql.svg"),
  javascript: assetPath("/tech-icons/javascript.svg"),
  tailwindcss: assetPath("/tech-icons/tailwindcss.svg"),
  express: assetPath("/tech-icons/express.svg"),
  tableau: assetPath("/tech-icons/tableau.svg"),
  powerbi: assetPath("/tech-icons/powerbi.svg"),
};

export const getTechLogos = async (techArray: string[]) => {
  return techArray.map((tech) => {
    const normalized = normalizeTechName(tech);

    return {
      tech,
      url: techIconMap[normalized] ?? assetPath("/tech.svg"),
    };
  });
};

export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};
