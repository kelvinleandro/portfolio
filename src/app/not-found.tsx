"use client";

import React from "react";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const NotFound = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      bg="main.blue800"
      color="main.creamWhite"
      direction={{ base: "column-reverse", md: "row" }}
      align="center"
      justify="center"
      paddingX={[8, 28]}
      paddingY={8}
    >
      <Stack width={{ base: "100%", md: "50%" }}>
        <Heading as="h1" fontSize={{ base: "5xl", md: "6xl" }}>
          Ooops!
        </Heading>
        <Heading
          as="h1"
          fontSize={{ base: "6xl", md: "8xl" }}
          color="main.blue600"
        >
          Nothing
        </Heading>
        <Heading as="h1" fontSize={{ base: "5xl", md: "6xl" }}>
          Here...
        </Heading>

        <Text>
          The page you&apos;re looking for couldn&apos;t be found. Check the URL
          to make sure you type it correctly and try again.
        </Text>

        <Box>
          <Button
            as={Link}
            href="/"
            variant="solid"
            bg="main.blueMarguerite"
            color="main.creamWhite"
            _hover={{
              textDecoration: "none",
              bg: "rgba(127, 86, 217, 0.4)",
            }}
          >
            Go Back Home
          </Button>
        </Box>
      </Stack>

      <Stack width={{ base: "100%", md: "50%" }}>
        <Heading
          as="h1"
          textAlign="center"
          fontSize={{ base: "8xl", md: "9xl" }}
          color="main.blueMarguerite"
        >
          404
        </Heading>
      </Stack>
    </Flex>
  );
};

export default NotFound;
