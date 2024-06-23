import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors: {
    main: {
      blue800: '#0B1222',
      blue600: '#3296F3',
      blue400: '#0EA5E9',
      blue100: '#94a3b8',
      grey700: '#121212',
      grey500: '#262626',
      grey300: '#A6A6A6',
      creamWhite: '#F5F5F5',
      blueMarguerite: '#7F56D9',
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'main.blue800' : 'main.creamWhite',
        color: props.colorMode === 'dark' ? 'main.creamWhite' : 'main.blue800',
      },
    }),
  },
});
