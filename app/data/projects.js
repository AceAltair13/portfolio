import { techSkills } from "./skills";
import PortfolioImage from "../../public/portfolio.png";
import SchedulexImage from "../../public/schedulex.png";
import ExaminatorImage from "../../public/examinator.png";
import OpenRestaurantImage from "../../public/openrestaurant.png";
import FoodzillaImage from "../../public/foodzilla.png";
import EventManagementSystem from "../../public/eventmanagementsystem.png";
import MuiStickyNotesImage from "../../public/muistickynotes.png";
import SmartSecureLockImage from "../../public/smartsecurelock.png";

export const projects = [
  {
    title: "Portfolio",
    link: "https://github.com/AceAltair13/portfolio",
    image: PortfolioImage,
    description: "My portfolio website built using Next.js 14.0 and Tailwind CSS.",
    skills: [
      techSkills.nextjs,
      techSkills.reactjs,
      techSkills.tailwindcss,
      techSkills.javascript,
      techSkills.html,
      techSkills.css,
    ]
  },
  {
    title: "Schedulex",
    link: "https://github.com/AceAltair13/schedulex",
    image: SchedulexImage,
    description:
      "Schedulex generates timetables for general purposes with complex parameters using genetic algorithm.",
    skills: [techSkills.reactjs, techSkills.redux, techSkills.materialui],
  },
  {
    title: "Examinator",
    link: "https://github.com/AceAltair13/proctor-website",
    image: ExaminatorImage,
    description:
      "Examinator is an online examination system with automatic realtime proctoring capabilities.",
    skills: [
      techSkills.reactjs,
      techSkills.redux,
      techSkills.firebase,
      techSkills.nodejs,
      techSkills.expressjs,
      techSkills.materialui,
      techSkills.tensorflowjs,
      techSkills.restapi,
    ],
  },
  {
    title: "OpenRestaurant",
    link: "https://github.com/AceAltair13/OpenRestaurant",
    image: OpenRestaurantImage,
    description:
      "OpenRestaurant is a food order placing app which displays menus of nearby restaurants and food trucks.",
    skills: [
      techSkills.kotlin,
      techSkills.firebase,
      techSkills.sqlite,
      techSkills.androidstudio,
    ],
  },
  {
    title: "Foodzilla",
    link: "https://github.com/AceAltair13/Foodzilla-A-Recipe-IO",
    image: FoodzillaImage,
    description:
      "Foodzilla is a food recipe finding website. You can even use it to share your own recipes.",
    skills: [
      techSkills.html,
      techSkills.css,
      techSkills.javascript,
      techSkills.bootstrap,
      techSkills.php,
      techSkills.django,
      techSkills.mysql,
    ],
  },
  {
    title: "Event Management System",
    link: "https://github.com/AceAltair13/Event-Management-System--Flask",
    image: EventManagementSystem,
    description:
      "Alpha Events is an Event Management System used for booking and managing birthdays, anniversaries and other events.",
    skills: [
      techSkills.python,
      techSkills.flask,
      techSkills.html,
      techSkills.bootstrap,
      techSkills.mariadb,
    ],
  },
  {
    title: "MUI Sticky Notes",
    link: "https://github.com/AceAltair13/material-ui-sticky-notes",
    image: MuiStickyNotesImage,
    description:
      "MUI Sticky Notes is a React App utilizing Material UI used to create and manage sticky notes.",
    skills: [techSkills.reactjs, techSkills.materialui],
  },
  {
    title: "Smart & Secure Lock",
    link: "https://github.com/krupalvora/Smart-SecureLock",
    image: SmartSecureLockImage,
    description:
      "Smart & Secure Lock is an IoT project utilizing a Flask backend to send and receive requests from an ESP32 board.",
    skills: [
      techSkills.flask,
      techSkills.python,
      techSkills.bootstrap,
      techSkills.firebase,
      techSkills.heroku,
    ],
  },
];
