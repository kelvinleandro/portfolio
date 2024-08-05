import carepulse from "@/assets/carepulse.png";
import clapperflix from "@/assets/clapperflix.png";
import todo from "@/assets/todo.png";
import easybank from "@/assets/easybank.png";
import quintura from "@/assets/quintura.png"
import carameloSniffer from "@/assets/caramelo-sniffer.png";
import { Project } from "@/types/project";

const REACT_PROJECTS: Project[] = [
  {
    title: "CarePulse",
    description:
      "A patient management system that allows patients to schedule appointments with a doctor",
    url: "https://github.com/kelvinleandro/react-carepulse",
    imagePath: carepulse,
  },
  {
    title: "Caramelo Sniffer",
    description:
      "A Linux packet sniffer using Python's Socket Programming, integrated with React for the UI.",
    url: "https://github.com/kelvinleandro/caramelo-sniffer-react",
    imagePath: carameloSniffer,
  },
  {
    title: "Easybank",
    description:
      "Landing page project challenge for a fictitious digital banking called Easybank",
    url: "https://github.com/kelvinleandro/react-easybank",
    imagePath: easybank,
  },
];

const REACT_NATIVE_PROJECTS: Project[] = [
  {
    title: "ClapperFlix",
    description:
      "A movie app using the TMDB API, featuring login and registration authentication with Firebase and Firestore to save favorite movies.",
    url: "https://github.com/kelvinleandro/movie-app",
    imagePath: clapperflix,
  },
  {
    title: "Quintura",
    description:
      "\"Quintura\" is a weather app that utilizes the WeatherAPI to provide users with real-time weather forecasts. It allows users to select their preferred units of measurement for a personalized experience.",
    url: "https://github.com/kelvinleandro/weather-app",
    imagePath: quintura,
  },
  {
    title: "TODO App",
    description:
      "The classic todo app, utilizing the Context API for performing CRUD operations and Expo SQLite for data persistence. Additionally, it supports theme customization.",
    url: "https://github.com/kelvinleandro/todo-app",
    imagePath: todo,
  },
];

export { REACT_PROJECTS, REACT_NATIVE_PROJECTS };
