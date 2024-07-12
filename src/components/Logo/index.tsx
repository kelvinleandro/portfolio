import React from "react";
import Link from "next/link";
import TypeWriter from "../TypeWriter";

const Logo = () => {
  return (
    <Link href="/">
      <TypeWriter
        text="<  KELVIN />"
        fontSize="lg"
        fontWeight="bold"
        bgGradient="linear(to-r, main.blueMarguerite, main.blue600)"
        bgClip="text"
      />
    </Link>
  );
};

export default Logo;
