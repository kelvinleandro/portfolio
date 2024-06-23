import React from "react";
import { Flex, useColorMode, Text, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Logo from "../Logo";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justify="space-between">
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
