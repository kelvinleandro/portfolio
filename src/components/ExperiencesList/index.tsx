import { Experience } from "@/types";
import { useInView } from "react-intersection-observer";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";

type Props = {
  data: Experience[];
};

const MotionFlex = motion(Flex);

const ExperiencesList = ({ data }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <MotionFlex
      direction={"column"}
      gap={6}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={scaleInVariants}
      width={"100%"}
      maxW={{md: "56rem"}}
    >
      {data.map((item, index) => (
        <ExperienceItem key={index} item={item} />
      ))}
    </MotionFlex>
  );
};

export default ExperiencesList;
