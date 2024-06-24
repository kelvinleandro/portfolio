import ubuntu from "@/assets/ubuntu.png";
import kgpt from "@/assets/k-gpt.png";
import clapperflix from "@/assets/clapperflix.png";
import todo from "@/assets/todo.png";
import { Project } from "@/types/project";

const REACT_PROJECTS: Project[] = [
  {
    title: "Ubuntu Interface",
    description:
      "A recreation of the Ubuntu/GNOME home interface, including the top bar and app grid",
    url: "https://github.com/kelvinleandro/ubuntu-react",
    imagePath: ubuntu,
  },
  {
    title: "K-GPT",
    description:
      "A ChatBot, visually inspired by the ChatGPT UI, utilizing the OpenAI API to provide AI responses",
    url: "https://github.com/kelvinleandro/chatgpt-clone-site",
    imagePath: kgpt,
  },
  {
    title: "K-GPT",
    description:
      "A ChatBot, visually inspired by the ChatGPT UI, utilizing the OpenAI API to provide AI responses",
    url: "https://github.com/kelvinleandro/chatgpt-clone-site",
    imagePath: kgpt,
  },
];

const REACT_NATIVE_PROJECTS: Project[] = [
  {
    title: "ClapperFlix",
    description:
      "A movie app using the TMDB API, featuring login and registration authentication with Firebase and Firestore to save favorite movies",
    url: "https://github.com/kelvinleandro/movie-app",
    imagePath: clapperflix,
  },
  {
    title: "TODO App",
    description:
      "The classic todo app, utilizing the Context API for performing CRUD operations and Expo SQLite for data persistence. Additionally, it supports theme customization.",
    url: "https://github.com/kelvinleandro/todo-app",
    imagePath: todo,
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
