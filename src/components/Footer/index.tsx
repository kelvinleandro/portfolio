import {
  Flex,
  IconButton,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";

const socialMedia = [
  {
    label: "Github",
    link: "https://www.github.com/kelvinleandro",
    Icon: GithubIcon,
  },
  {
    label: "Linkedin",
    link: "https://linkedin.com/in/kelvinleandro",
    Icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/kelvinleandr0",
    Icon: InstagramIcon,
  },
];

const Footer = () => {
  const hoverColor = useColorModeValue("main.blue800", "main.blue600");
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
        {socialMedia.map(({ label, link, Icon }, index) => (
          <IconButton
            key={index}
            as={Link}
            isRound={true}
            aria-label={label}
            icon={<Icon boxSize={6} />}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="link"
            padding={0}
            _hover={{ color: hoverColor }}
          />
        ))}
      </Stack>

      <Text fontSize="small">Developed by Kelvin Leandro.</Text>
    </Flex>
  );
};

export default Footer;
