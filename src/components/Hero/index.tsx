import { Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <Flex direction={["column", "row"]} padding={20}>
      <Stack width={{base: "100%", md: "50%"}} justifyContent="center">
        <Heading as="h2" fontSize="2xl">HELLO, FRIEND. I AM</Heading>
        <Heading as="h1" fontSize="6xl">KELVIN LEANDRO</Heading>
        <Heading as="h2" fontSize="2xl">FRONT-END DEVELOPER</Heading>
      </Stack>
    </Flex>
  )
}

export default Hero