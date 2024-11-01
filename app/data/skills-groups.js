import { FaCode } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { SiFramework } from "react-icons/si";
import { VscTools } from "react-icons/vsc";
import { techSkills } from "./skills";

const programmingSkills = [
  "python",
  "c",
  "cpp",
  "csharp",
  "java",
  "kotlin",
  "dart",
  "r",
  "php",
  "gdscript",
].map((skill) => techSkills[skill] || { title: skill, icon: null });

const databaseSkills = [
  "mysql",
  "mariadb",
  "mongodb",
  "firebase",
  "mssql",
  "sqlite",
].map((skill) => techSkills[skill] || { title: skill, icon: null });

const frameworkSkills = [
  "flutter",
  "bootstrap",
  "materialui",
  "tailwindcss",
  "shadcn",
  "flask",
  "django",
  "fastapi",
  "discordpy",
  "discordjs",
  "tensorflowjs",
  "thirdweb",
].map((skill) => techSkills[skill] || { title: skill, icon: null });

const webdevSkills = [
  "html",
  "css",
  "javascript",
  "typescript",
  "nodejs",
  "expressjs",
  "aspnet",
  "reactjs",
  "reactnative",
  "nextjs",
  "redux",
  "angular",
  "dotnet",
  "json",
  "solidity"
].map((skill) => techSkills[skill] || { title: skill, icon: null });

const cloudSkills = ["restapi", "graphql", "apollo", "aws", "azure", "heroku", "git"].map(
  (skill) => techSkills[skill] || { title: skill, icon: null }
);

const toolsSkills = [
  "postman",
  "canva",
  "adobeexpress",
  "godotengine",
  "androidstudio",
  "rstudio",
  "adobeacrobat",
].map((skill) => techSkills[skill] || { title: skill, icon: null });

export const skillGroup = [
  {
    title: "Programming Languages",
    skills: programmingSkills,
    skillIcon: <FaCode className="inline-icon" />,
  },
  {
    title: "Web Development",
    skills: webdevSkills,
    skillIcon: <TbWorldWww className="inline-icon" />,
  },
  {
    title: "Database",
    skills: databaseSkills,
    skillIcon: <FaDatabase className="inline-icon" />,
  },
  {
    title: "Frameworks",
    skills: frameworkSkills,
    skillIcon: <SiFramework className="inline-icon" />,
  },
  {
    title: "Cloud Development",
    skills: cloudSkills,
    skillIcon: <FaCloud className="inline-icon" />,
  },
  {
    title: "Tools & Software",
    skills: toolsSkills,
    skillIcon: <VscTools className="inline-icon" />,
  },
];
