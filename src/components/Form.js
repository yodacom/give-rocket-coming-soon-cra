// import firebase from "../../firebase/firebase";
import React from 'react'
import {
  Input,
  Stack,
  InputLeftElement,
  Icon,
  InputGroup,
  FormControl,
  Button,
  Divider,
  Box,
  Flex,
  FormHelperText,
} from "@chakra-ui/core";

const form = () => {
  return (
    <>
      <Box w="80%">
        <form action="submit">
          <Stack spacing={4} isInline>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<Icon name="info" />} />
                <Input
                  type=" name "
                  id="fName"
                  placeholder="First Name"
                  aria-label="First Name"
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<Icon name="email" />} />
                <Input type="email" placeholder="Email" aria-label="Email" />
              </InputGroup>
            </FormControl>
          </Stack>
          <Divider borderColor="red.100" />
          <Flex w="100%" align="center" justify="center">
            <Button
              leftIcon="arrow-forward"
              type="submit"
              // variantColor="blue.200"
              boxShadow="sm"
              _hover={{ bg: "blue.400" }}
              _active={{ boxShadow: "lg" }}
              _focus={{ boxShadow: "outline" }}
            >
              Submit!
            </Button>
            <FormHelperText textAlign="center" ml="5" color="white.200">
              We will notify you when we are live! <br />
              We never share your email so no worries...{" "}
            </FormHelperText>
          </Flex>
        </form>
      </Box>
    </>
  );
};
export default form;
