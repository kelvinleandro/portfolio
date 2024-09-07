import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../SectionTitle";
import ExperiencesList from "../ExperiencesList";
import { EXPERIENCES } from "@/constants/experiences";

const Experiences = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      align="center"
      gap={4}
      marginY={4}
      paddingX={{ base: 8, sm: 14, md: 28 }}
    >
      <Box>
        <SectionTitle>Experiences</SectionTitle>
      </Box>

      <Center marginTop={2}>
        <ExperiencesList data={EXPERIENCES} />
      </Center>
    </Flex>
  );
};

export default Experiences;
