"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Flex } from "@chakra-ui/react";
import "./globals.css";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {

  return (
    <Flex direction="column" width="100%">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </Flex>
  );
}
