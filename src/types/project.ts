import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  url: string;
  imagePath: string | StaticImageData;
}
