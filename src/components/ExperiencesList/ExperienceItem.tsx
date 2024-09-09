import { Experience } from "@/types";
import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  item: Experience;
};

const ExperienceItem = ({
  item: { role, where, when, description },
}: Props) => {
  return (
    <Flex
      paddingY={4}
      justify={"space-between"}
      align={"flex-start"}
      direction={{ base: "column", md: "row" }}
    >
      <Box flex={1}>
        <Text fontSize={"xl"} fontWeight={"bold"}>{where}</Text>
        <Text fontSize={"lg"}>{when}</Text>
      </Box>
      <Box flex={1}>
        <Text fontSize={"xl"} fontWeight={"bold"}>{role}</Text>
        <Text fontSize={"lg"} >{description}</Text>
      </Box>
    </Flex>
  );
};

export default ExperienceItem;
