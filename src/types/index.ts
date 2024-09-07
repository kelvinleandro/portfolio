import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  url: string;
  imagePath: string | StaticImageData;
}

export interface Experience {
  role: string;
  where: string;
  when: string;
  description: string;
}