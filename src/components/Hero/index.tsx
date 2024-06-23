"use client";

import Image from "next/image";
import { Center, Flex, Heading, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import programmer_img from "@/assets/programmer.png"

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
    <Flex direction={["column", "row"]} padding={[8, 28]}>
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
          // textFillColor="transparent"
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
      >
        <Image src={programmer_img} alt="programmer image" />
      </MotionCenter>
    </Flex>
  );
};

export default Hero;
