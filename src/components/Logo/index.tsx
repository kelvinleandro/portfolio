import React from "react";
import Link from "next/link";
import TypeWriter from "../TypeWriter";

const Logo = () => {
  return (
    <Link href="/">
      <TypeWriter text="<  Kelvin />" fontSize="lg" fontWeight="bold" />
    </Link>
  );
};

export default Logo;
