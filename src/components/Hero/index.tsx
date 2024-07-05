"use client";

import { Box, Center, Flex, Heading, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { motion } from "framer-motion";
import programmer_img from "@/assets/programmer1.png";
import MatrixRain from "../MatrixRain";
import { useRef } from "react";

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
  const imageBoxRef = useRef<HTMLDivElement | null>(null);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      paddingX={{base: 8, sm: 14, md: 28}}
      paddingY={4}
      overflow="hidden"
      align="center"
      justify="space-between"
      gap={4}
    >
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
        <Heading
          as="h1"
          fontSize="6xl"
          bgGradient="linear(to-r, main.blueMarguerite, main.blue600)"
          bgClip="text"
        >
          KELVIN LEANDRO
        </Heading>
        <Heading as="h2" fontSize="2xl">
          FRONT-END AND MOBILE DEVELOPER
        </Heading>
      </MotionStack>

      <MotionCenter
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        width={{ base: "100%", md: "50%" }}
        maxW={{md: "300px"}}
        overflow="hidden"
      >
        <Box ref={imageBoxRef} width="100%" height="auto" position="relative" >
          <MatrixRain parentRef={imageBoxRef} />
          <Image
            src={programmer_img}
            alt="programmer image"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              position: "absolute",
              zIndex: 10,
              top: 0,
              left: 0,
            }}
          />
        </Box>
      </MotionCenter>
    </Flex>
  );
};

export default Hero;
