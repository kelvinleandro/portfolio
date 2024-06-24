import React from "react";
import { Flex } from "@chakra-ui/react";
import { Project } from "@/types/project";
import ProjectItem from "./ProjectItem";

type Props = {
  data: Project[];
};

const ProjectList = ({ data }: Props) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      wrap="wrap"
      align="center"
      justify="center"
      gap={6}
    >
      {data.map((item, index) => (
        <ProjectItem key={index} item={item} />
      ))}
    </Flex>
  );
};

export default ProjectList;
