import React from "react";
import { Grid } from "@chakra-ui/react";
import { Project } from "@/types/project";
import ProjectItem from "./ProjectItem";

type Props = {
  data: Project[];
};

const ProjectList = ({ data }: Props) => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gap={6}
      alignItems="stretch"
    >
      {data.map((item, index) => (
        <ProjectItem key={index} item={item} />
      ))}
    </Grid>
  );
};

export default ProjectList;
