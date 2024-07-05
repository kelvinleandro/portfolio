import React from "react";
import { Flex, useColorMode, Text, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Logo from "../Logo";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justify="space-between" paddingX={{base: 8, sm: 14, md: 28}} paddingY={3} align="center">
      <Logo />
      <IconButton
        aria-label="Toggle theme"
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Header;
