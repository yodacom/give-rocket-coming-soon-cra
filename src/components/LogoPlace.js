import React from 'react'

import {
  Flex,
  useTheme,
  Stack,
  PseudoBox,
  useColorMode,
  IconButton,
  Box,
  Image,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/core";

const LogoPlace = () => {
  const theme = useTheme();
  const comingSoon = `Coming Soon...`;
  const title = `Give Rocket`;
  const subText = `Helping great causes by enabling awesome donors to provide gifts of things
    or services for auction - virtually or physically - to causes they believe in`;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="50vh"
      maxWidth="75%"
      m="2"
      p="2"
    >
      <Stack>
        <Box mt={10}>
          <Text as="h1" fontSize="4xl">
            Coming Soon ....{" "}
          </Text>
        </Box>
        <Stack spacing="8" mr="8" isInline>
          <Heading fontSize="10vw">{title}</Heading>
          <Image h="10vh" src="../logo.svg" m="auto" alt="Logo of Give Rocket" />
        </Stack>
        <Heading fontSize="md" textAlign="center" maxWidth="25" mt="2" mb="8">
          {subText}
        </Heading>
      </Stack>
    </Flex>
  );
};
export default LogoPlace;
