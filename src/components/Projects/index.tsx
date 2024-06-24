import React from "react";
import SectionTitle from "../SectionTitle";
import { Flex, Box, Heading, Center } from "@chakra-ui/react";
import { REACT_PROJECTS, REACT_NATIVE_PROJECTS } from "@/constants/projects";
import ProjectList from "../ProjectList";

const Projects = () => {
  return (
    <Flex
      justifyContent="center"
      direction="column"
      gap={4}
      marginY={4}
      align="center"
    >
      <Box>
        <SectionTitle>Projects</SectionTitle>
      </Box>

      <Center paddingX={[8, 28]} flexDirection="column" marginTop={2}>
        <Heading as="h3" fontSize="2xl" marginY={3}>
          REACT
        </Heading>
        <ProjectList data={REACT_PROJECTS} />
      </Center>
      
      <Center paddingX={[8, 28]} flexDirection="column" marginTop={2}>
        <Heading as="h3" fontSize="2xl" marginY={3}>
          REACT NATIVE
        </Heading>
        <ProjectList data={REACT_NATIVE_PROJECTS} />
      </Center>
    </Flex>
  );
};

export default Projects;
