"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    main: {
      grey700: '#121212',
      grey500: '#262626',
      grey300: '#A6A6A6',
      creamWhite: '#F5F5F5',
      blueMarguerite: '#7F56D9',
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
}
