import { Box, Flex, Text } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";

const AboutMe = () => {
  return (
    <Flex justifyContent="center" direction="column" gap={4} marginY={4}>
      <Box>
        <SectionTitle>ABOUT ME</SectionTitle>
      </Box>
      <Box paddingX={[8, 28]}>
        <Text fontSize={["base", "lg"]} textAlign="left">
          My name is Kelvin Leandro. I am Brazilian and currently a student of
          Computer Engineering at the Federal University of Ceará. During my
          academic life, I participated in projects such as the junior
          enterprise of my course called GTi Engenharia Jr., a web development
          company focused on the development and consulting of websites. I am
          currently a scientific initiation scholarship holder, working on
          research involving machine learning and pattern recognition by
          applying different methods for detecting anomalies in EEG data for a
          future &quot;intelligent system for remote patient monitoring&quot;, a
          larger project in which my research is embedded.
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutMe;
