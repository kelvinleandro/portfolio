"use client"

import { Text, TextProps } from '@chakra-ui/react';
import useTypewriter from '@/hooks/useTypeWriter';

interface TypewriterProps extends TextProps {
  text: string;
  speed?: number;
  repeat?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, repeat = false, ...props }) => {
  const displayText = useTypewriter(text, speed, repeat);

  return <Text {...props}>{displayText}</Text>;
};

export default Typewriter;