import { FaPython } from "react-icons/fa";
import { TbHexagonLetterC } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMariadb } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMsqlServer } from "react-icons/di";
import { SiSqlite } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { SiFramework } from "react-icons/si";
import { SiRstudio } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiGodotengine } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { SiAdobeacrobatreader } from "react-icons/si";
import { VscTools } from "react-icons/vsc";
import { SiRedux } from "react-icons/si";

const programmingSkills = [
  { title: "Python", icon: <FaPython className="inline-icon" /> },
  { title: "C", icon: <TbHexagonLetterC className="inline-icon" /> },
  { title: "C++", icon: <TbBrandCpp className="inline-icon" /> },
  { title: "C#", icon: <TbBrandCSharp className="inline-icon" /> },
  { title: "Java", icon: <FaJava className="inline-icon" /> },
  { title: "Kotlin", icon: <SiKotlin className="inline-icon" /> },
  { title: "R", icon: <SiRstudio className="inline-icon" /> },
  { title: "PHP", icon: <FaPhp className="inline-icon" /> },
];

const databaseSkills = [
  { title: "MySQL", icon: <SiMysql className="inline-icon" /> },
  { title: "MariaDB", icon: <SiMariadb className="inline-icon" /> },
  { title: "MongoDB", icon: <SiMongodb className="inline-icon" /> },
  { title: "Firebase", icon: <IoLogoFirebase className="inline-icon" /> },
  {
    title: "MS SQL Server",
    icon: <DiMsqlServer className="inline-icon" />,
  },
  { title: "SQLite", icon: <SiSqlite className="inline-icon" /> },
];

const frameworkSkills = [
  { title: "Flutter", icon: <RiFlutterFill className="inline-icon" /> },
  { title: "Bootstrap", icon: <FaBootstrap className="inline-icon" /> },
  { title: "Material UI", icon: <SiMui className="inline-icon" /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss className="inline-icon" /> },
  { title: "Flask", icon: <SiFlask className="inline-icon" /> },
  { title: "FastAPI", icon: <SiFastapi className="inline-icon" /> },
  { title: "Discord.py", icon: <FaDiscord className="inline-icon" /> },
  { title: "Discord.js", icon: <IoLogoDiscord className="inline-icon" /> },
];

const webdevSkills = [
  { title: "HTML", icon: <FaHtml5 className="inline-icon" /> },
  { title: "CSS", icon: <FaCss3 className="inline-icon" /> },
  { title: "JavaScript", icon: <IoLogoJavascript className="inline-icon" /> },
  { title: "Node.js", icon: <FaNode className="inline-icon" /> },
  { title: "Express.js", icon: <SiExpress className="inline-icon" /> },
  { title: "ASP.NET", icon: <DiDotnet className="inline-icon" /> },
  { title: "React.js", icon: <FaReact className="inline-icon" /> },
  { title: "Redux", icon: <SiRedux className="inline-icon" /> },
  { title: "Angular", icon: <FaAngular className="inline-icon" /> },
  { title: ".Net", icon: <DiDotnet className="inline-icon" /> },
  { title: "REST API", icon: <TbApi className="inline-icon" /> },
];

const cloudSkills = [
  { title: "AWS", icon: <FaAws className="inline-icon" /> },
  {
    title: "Microsoft Azure",
    icon: <SiMicrosoftazure className="inline-icon" />,
  },
  { title: "Heroku", icon: <SiHeroku className="inline-icon" /> },
  { title: "Git", icon: <FaGitAlt className="inline-icon" /> },
];

const toolsSkills = [
  { title: "Canva", icon: <SiCanva className="inline-icon" /> },
  {
    title: "Adobe Express",
    icon: <SiAdobecreativecloud className="inline-icon" />,
  },
  { title: "Godot Engine", icon: <SiGodotengine className="inline-icon" /> },
  {
    title: "Android Studio",
    icon: <SiAndroidstudio className="inline-icon" />,
  },
  { title: "RStudio", icon: <SiRstudio className="inline-icon" /> },
  {
    title: "Adobe Acrobat",
    icon: <SiAdobeacrobatreader className="inline-icon" />,
  },
];

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
