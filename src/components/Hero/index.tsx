"use client";

import { Box, Center, Flex, Heading, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { motion } from "framer-motion";
import programmer_img from "@/assets/programmer.png";

// appears from the left
const fromLeft = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.75 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75 } },
};

const MotionStack = motion(Stack);
const MotionCenter = motion(Center);

const Hero = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      paddingX={[8, 28]}
      paddingY={4}
      overflow="hidden"
      align="center"
      justify="space-between"
    >
      <MotionStack
        variants={fromLeft}
        initial="hidden"
        animate="visible"
        width={{ base: "100%", md: "60%" }}
        justifyContent="center"
      >
        <Heading as="h2" fontSize="xl">
          HELLO, FRIEND. I AM
        </Heading>
        <Heading
          as="h1"
          fontSize="5xl"
          bgGradient="linear(to-r, main.blueMarguerite, main.blue600)"
          bgClip="text"
        >
          KELVIN LEANDRO
        </Heading>
        <Heading as="h2" fontSize="xl">
          FRONT-END AND MOBILE DEVELOPER
        </Heading>
      </MotionStack>

      <MotionCenter
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        width={{ base: "100%", md: "40%" }}
        maxW={{md: "200px"}}
        overflow="hidden"
      >
        <Box width="100%" height="auto" >
          <Image
            src={programmer_img}
            alt="programmer image"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </MotionCenter>
    </Flex>
  );
};

export default Hero;
