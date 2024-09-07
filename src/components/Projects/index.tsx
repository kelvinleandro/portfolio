"use client";

import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import {
  Flex,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorMode,
} from "@chakra-ui/react";
import { REACT_PROJECTS, REACT_NATIVE_PROJECTS } from "@/constants/projects";
import ProjectList from "../ProjectList";
import { motion } from "framer-motion";

const MotionTabPanel = motion(TabPanel);

const Projects = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const {colorMode} = useColorMode();

  const selectedTabColor = colorMode === "light" ? "main.blueMarguerite" : "main.blue400";

  const tabPanelVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      align="center"
      gap={4}
      marginY={4}
      paddingX={{ base: 8, sm: 14, md: 28 }}
    >
      <Box>
        <SectionTitle>Projects</SectionTitle>
      </Box>

      <Tabs isFitted index={tabIndex} onChange={(index) => setTabIndex(index)}>
        <TabList>
          <Tab
            _selected={{ color: selectedTabColor, borderColor: selectedTabColor }}
            fontWeight="600"
            >
            React
          </Tab>
          <Tab
            _selected={{ color: selectedTabColor, borderColor: selectedTabColor }}
            fontWeight="600"
          >
            React Native
          </Tab>
        </TabList>

        <TabPanels>
          <MotionTabPanel
            initial="hidden"
            exit="exit"
            variants={tabPanelVariants}
            key="react"
            animate={tabIndex === 0 ? "visible" : "hidden"}
          >
            <ProjectList data={REACT_PROJECTS} />
          </MotionTabPanel>
          <MotionTabPanel
            initial="hidden"
            exit="exit"
            variants={tabPanelVariants}
            key="react-native"
            animate={tabIndex === 1 ? "visible" : "hidden"}
          >
            <ProjectList data={REACT_NATIVE_PROJECTS} />
          </MotionTabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Projects;
