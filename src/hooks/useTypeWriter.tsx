import { useState, useEffect } from "react";

const useTypewriter = (
  text: string,
  speed: number = 50,
  repeat: boolean = false
) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    let typingInterval: NodeJS.Timeout;

    const typeWriterEffect = () => {
      typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prevText) => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          if (repeat) {
            setTimeout(() => {
              setDisplayText("");
              i = 0;
              typeWriterEffect();
            }, speed);
          }
        }
      }, speed);
    };

    typeWriterEffect();

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, repeat]);

  return displayText;
};

export default useTypewriter;
