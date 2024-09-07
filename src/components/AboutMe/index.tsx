import { Box, Flex, Text } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Flex
      justifyContent="center"
      direction="column"
      gap={4}
      marginY={4}
      paddingX={{ base: 8, sm: 14, md: 28 }}
      ref={ref}
    >
      <MotionBox
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <SectionTitle>ABOUT ME</SectionTitle>
      </MotionBox>
      <MotionBox
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <Text fontSize={["base", "lg"]} textAlign="left">
          My name is Kelvin Leandro. I am Brazilian and currently a student of
          Computer Engineering at the Federal University of Ceará. During my
          academic life, I participated in projects such as the junior
          enterprise of my course called GTi Engenharia Jr., a web development
          company focused on website development and consulting. I am currently
          an undergraduate research fellow, working on a project for detecting
          anomalies in biosignals of patients with Chagas disease to aid in
          cardiological medical diagnosis.
        </Text>
      </MotionBox>
    </Flex>
  );
};

export default AboutMe;
