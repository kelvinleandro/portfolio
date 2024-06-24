import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { Project } from "@/types/project";
import GithubIcon from "../Icons/GithubIcon";

type Props = {
  item: Project;
};

const ProjectItem = ({ item }: Props) => {
  const color = useColorModeValue("main.blue800", "main.creamWhite")
  
  return (
    <Card
      maxW="300px"
      border="2px"
      borderColor="main.grey300"
      transition="border-color 0.3s ease"
      _hover={{ borderColor: "main.blueMarguerite" }}
    >
      <CardBody>
        <Image src={item.imagePath} alt={item.title} borderRadius="lg" />
        <Stack mt={3} spacing={3}>
          <Heading as="h4" fontSize="2xl">
            {item.title}
          </Heading>
          <Text align="left">{item.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          as={Link}
          href={item.url}
          target="_blank"
          leftIcon={<GithubIcon />}
          variant="solid"
          textDecoration="none"
          color={color}
          bg="rgba(127, 86, 217, 0.4)"
          _hover={{ textDecoration: "none", bg: "main.blueMarguerite", color: "main.creamWhite" }}
        >
          View on GitHub
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectItem;
