import { techSkills } from "./skills";
import AccentureImage from "../../public/accenture.webp";
import CreativeFinserveImage from "../../public/cfpi.webp";
import BlueEyeSoftImage from "../../public/bes.webp";

export const experience = [
  {
    role: "Advanced App Engineering Associate",
    company: "Accenture",
    location: "Mumbai, India",
    start: "June 2022",
    end: "July 2023",
    description: [
      "Developed and maintained a robust web application using the .NET framework, C#, and Angular with TypeScript, resulting in a 30% improvement in system performance and user experience.",
      "Utilized DuckCreek for designing and managing insurance policies, leading to a 25% increase in policy administration efficiency and customization.",
      "Implemented CI/CD pipelines using Jenkins, which streamlined the development process, improved code quality by 40%, and accelerated the release cycle by 50%.",
    ],
    skills: [techSkills.csharp, techSkills.dotnet, techSkills.aspnet, techSkills.angular],
    image: AccentureImage,
  },
  {
    role: "Software Developer Intern",
    company: "Creative Finserve Pvt. Ltd.",
    location: "Mumbai, India",
    start: "February 2020",
    end: "June 2021",
    description: [
      "Led the development of a mobile application for the company’s CRM website using the Flutter framework for Android and iOS, resulting in a 25% increase in user engagement and a 20% improvement in accessibility.",
      "Played a pivotal role in refining the UI/UX design, resulting in a 10% boost in user engagement, and took creative ownership by crafting a distinctive app logo that resonated with the audience.",
      "Collaborated on optimizing the back end of the CRM system, implementing PHP and MySQL solutions that reduced data retrieval time by 30% and enhanced data management efficiency.",
    ],
    skills: [techSkills.flutter, techSkills.php, techSkills.mysql],
    image: CreativeFinserveImage,
  },
  {
    role: "Software Developer Intern",
    company: "Blue Eye Soft Corp",
    location: "Remote",
    start: "June 2020",
    end: "April 2021",
    description: [
      'Engineered a Genetic Algorithm-based Class Scheduler using Python for the "CovidProtect" App, achieving 97% scheduling accuracy and reducing resource conflicts by 40%.',
      "Designed and seamlessly integrated a dedicated app module using the Flutter framework, ensuring compatibility across Android and iOS platforms, resulting in a 15% increase in user adoption.",
      "Successfully deployed the class scheduler on an AWS EC2 instance and created a robust API using the FastAPI framework, enabling real-time access for users, with 99.9% uptime and a 20% increase in concurrent users.",
    ],
    skills: [
      techSkills.flutter,
      techSkills.python,
      techSkills.fastapi,
      techSkills.aws,
    ],
    image: BlueEyeSoftImage,
    link: "https://www.blueyesoft.com/",
  },
];
