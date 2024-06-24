import { Flex, IconButton, Stack, Text, Link } from "@chakra-ui/react";
import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";

const Footer = () => {
  return (
    <Flex
      direction={["column", "row-reverse"]}
      align="center"
      justify={["center", "space-between"]}
      gap={4}
      paddingX={[8, 28]}
      paddingY={4}
      marginTop={8}
    >
      <Stack direction="row" spacing={3}>
        {/* <IconButton
          as={Link}
          isRound={true}
          aria-label="Github"
          icon={<GithubIcon height={18} width={18} />}
          href="https://www.github.com/kelvinleandro"
          target="_blank"
          rel="noopener noreferrer"
        /> */}

        <Link
          href="https://www.github.com/kelvinleandro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon fontSize={24} />
        </Link>

        <Link
          href="https://linkedin.com/in/kelvinleandro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon fontSize={24} />
        </Link>

        <Link
          href="https://www.instagram.com/kelvinleandr0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon fontSize={24} />
        </Link>
      </Stack>

      <Text fontSize="small">Developed by Kelvin Leandro.</Text>
    </Flex>
  );
};

export default Footer;
