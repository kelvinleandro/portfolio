import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Flex } from "@chakra-ui/react";
import './globals.css'
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <Flex direction='column' bg="main.grey700" width="100vw" color="main.creamWhite" >
      <Header />
      <Hero />
      <AboutMe />
    </Flex>
  );
}
