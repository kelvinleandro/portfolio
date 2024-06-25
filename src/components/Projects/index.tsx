import React from "react";
import SectionTitle from "../SectionTitle";
import { Flex, Box, Heading, Center } from "@chakra-ui/react";
import { REACT_PROJECTS, REACT_NATIVE_PROJECTS } from "@/constants/projects";
import ProjectList from "../ProjectList";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionCenter = motion(Center);

const Projects = () => {
  const { ref: reactRef, inView: reactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: reactNativeRef, inView: reactNativeInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInSlideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      align="center"
      gap={4}
      marginY={4}
      paddingX={[8, 28]}
    >
      <Box>
        <SectionTitle>Projects</SectionTitle>
      </Box>

      <MotionCenter
        flexDirection="column"
        marginTop={2}
        initial="hidden"
        animate={reactInView ? "visible" : "hidden"}
        variants={fadeInSlideUpVariants}
        ref={reactRef}
      >
        <Heading as="h3" fontSize="2xl" marginY={3}>
          REACT
        </Heading>
        <ProjectList data={REACT_PROJECTS} />
      </MotionCenter>

      <MotionCenter
        flexDirection="column"
        marginTop={2}
        initial="hidden"
        animate={reactNativeInView ? "visible" : "hidden"}
        variants={fadeInSlideUpVariants}
        ref={reactNativeRef}
      >
        <Heading as="h3" fontSize="2xl" marginY={3}>
          REACT NATIVE
        </Heading>
        <ProjectList data={REACT_NATIVE_PROJECTS} />
      </MotionCenter>
    </Flex>
  );
};

export default Projects;
