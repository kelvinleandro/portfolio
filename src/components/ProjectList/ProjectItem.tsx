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
import { Project } from "@/types";
import GithubIcon from "../Icons/GithubIcon";

type Props = {
  item: Project;
};

const ProjectItem = ({ item }: Props) => {
  const color = useColorModeValue("main.blue800", "main.creamWhite");

  return (
    <Card
      display="flex"
      flexDirection="column"
      height="100%"
      maxW="300px"
      borderWidth="3px"
      borderColor="main.grey300"
      transition="border-color 0.3s ease"
      _hover={{ borderColor: "main.blueMarguerite" }}
    >
      <CardBody flex="1">
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
          color="main.creamWhite"
          bg="main.blueMarguerite"
          _hover={{
            textDecoration: "none",
            bg: "rgba(127, 86, 217, 0.4)",
            color: color,
          }}
        >
          View on GitHub
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectItem;
