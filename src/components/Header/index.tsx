import React from "react";
import { Flex, useColorMode, Text, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Logo from "../Logo";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justify="space-between" paddingX={[8, 20]} paddingY={3} align="center">
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
