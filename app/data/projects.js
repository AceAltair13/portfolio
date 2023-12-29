import { techSkills } from "./skills";
import SchedulexImage from "../../public/schedulex.png";
import ExaminatorImage from "../../public/examinator.png";
import OpenRestaurantImage from "../../public/openrestaurant.png";

export const projects = [
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
    link: "",
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
      techSkills.restapi
    ],
  },
  {
    title: "OpenRestaurant",
    link: "",
    image: OpenRestaurantImage,
    description: "OpenRestaurant is a food order placing app which displays menus of nearby restaurants and food trucks.",
    skills: [
      techSkills.kotlin,
      techSkills.firebase,
      techSkills.sqlite,
      techSkills.androidstudio,
    ]
  }
];
