"use client"

import { Flex, Heading, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

// appears from the left
const fromLeft = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.75 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const MotionStack = motion(Stack);

const Hero = () => {
  return (
    <Flex direction={["column", "row"]} padding={20}>
      <MotionStack
        variants={fromLeft}
        initial="hidden"
        animate="visible"
        width={{ base: "100%", md: "50%" }}
        justifyContent="center"
      >
        <Heading as="h2" fontSize="2xl">
          HELLO, FRIEND. I AM
        </Heading>
        <Heading as="h1" fontSize="6xl">
          KELVIN LEANDRO
        </Heading>
        <Heading as="h2" fontSize="2xl">
          FRONT-END AND MOBILE DEVELOPER
        </Heading>
      </MotionStack>
    </Flex>
  );
};

export default Hero;
