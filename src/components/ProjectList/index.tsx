import React from "react";
import { Grid } from "@chakra-ui/react";
import { Project } from "@/types/project";
import ProjectItem from "./ProjectItem";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type Props = {
  data: Project[];
};

const MotionGrid = motion(Grid);

const ProjectList = ({ data }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <MotionGrid
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gap={6}
      alignItems="stretch"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={scaleInVariants}
    >
      {data.map((item, index) => (
        <ProjectItem key={index} item={item} />
      ))}
    </MotionGrid>
  );
};

export default ProjectList;
