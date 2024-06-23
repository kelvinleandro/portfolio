"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import "./globals.css";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

export default function Home() {
  const bg = useColorModeValue("main.creamWhite", "main.blue800");
  const color = useColorModeValue("main.blue800", "main.creamWhite");

  return (
    <Flex direction="column" width="100vw">
      <Header />
      <Hero />
      <AboutMe />
      <Footer />
    </Flex>
  );
}
