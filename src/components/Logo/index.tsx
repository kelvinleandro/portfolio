import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Text size="lg" fontWeight="bold">{`< Kelvin />`}</Text>
    </Link>
  );
};

export default Logo;
