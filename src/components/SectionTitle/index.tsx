"use client"

import { Box, Center, Heading, HeadingProps } from "@chakra-ui/react";
import { useState, useEffect, ReactNode } from "react";

interface Props extends HeadingProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: Props) => {
  const [underlineWidth, setUnderlineWidth] = useState("0%");

  useEffect(() => {
    setUnderlineWidth("100%");
  }, []);

  return (
    <Center>
      <Box position="relative" display="inline-block">
        <Heading
          fontSize="3xl"
          textTransform="uppercase"
          as="h2"
          textAlign="center"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-4px",
            left: 0,
            width: underlineWidth,
            height: "4px",
            backgroundColor: "main.blueMarguerite",
            transition: "width 0.5s ease-in-out",
          }}
        >
          {children}
        </Heading>
      </Box>
    </Center>
  );
};

export default SectionTitle;
