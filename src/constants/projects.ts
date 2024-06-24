import ubuntu from "@/assets/ubuntu.png";
import kgpt from "@/assets/k-gpt.png";
import clapperflix from "@/assets/clapperflix.png";
import todo from "@/assets/todo.png";
import password_generator from "@/assets/password_generator.png";
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
    title: "Password Generator",
    description:
      "Forget passwords like \"yourname123\". Use this page to customize your password length and create a more secure one.",
    url: "https://github.com/kelvinleandro/react-password-generator",
    imagePath: password_generator,
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
