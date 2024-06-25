"use client"

import { useColorMode } from "@chakra-ui/react";
import React, { MutableRefObject, useEffect, useRef } from "react";

type Props = {
  parentRef: MutableRefObject<HTMLDivElement | null>;
}

const MatrixRain = ({parentRef}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    console.log("MatrixRain useEffect called");
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;
    const container = parentRef.current!;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight

    const katakana =
      "アカサタナハマヤラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレゲゼデベペオコソトノホモヨロヲゴゾドボポ".split(
        ""
      );
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const nums = "0123456789".split("");

    const alphabet = katakana.concat(latin).concat(nums);

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops: number[] = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = colorMode === "dark" ? 'rgba(11, 18, 34, 0.2)' : "rgba(245, 245, 245, 0.2)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "#0F0";
      context.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }

        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, [colorMode, parentRef]);

  return (
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
  );
};

export default MatrixRain;
