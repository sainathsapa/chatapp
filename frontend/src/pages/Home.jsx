import React from "react";
import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Box,
  Image,
  IconButton,
  Center,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <Box p="10px" minH="100vh">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bg="rgba(48, 48, 48, 0.247)"
        backdropFilter="blur(202px)"
        padding="1rem"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="2px"
        >
          <Image
            src="../src/assets/logo.svg"
            alt="hero"
            width="90px"
            
          />      <Text fontSize="xl" fontWeight="bold" color="white">
            Chat
          </Text>
        </Box>
        <Flex>
          <Link to="/signup">
            <Button
              variant="ghost"
              color="white"
              mr={4}
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
            >
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button
              colorScheme="teal"
              variant="solid"
              _hover={{ bg: "teal.500" }}
            >
              Login
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          textAlign="center"
        >
          U {" & "}
          <Text as={"span"} color={"teal.400"}>
            ME
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"} textAlign="center">
          Stay connected and never miss a chat.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Link to="/signup">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              Start
            </Button>
          </Link>
         
        </Stack>

        
      </Stack>

      <Box bg="#202020" color="white" py={4} textAlign="center">
        <Text fontSize="sm" mt={2}>
          © {new Date().getFullYear()} DSK Solutions. All rights reserved.
        </Text>
        <Text fontSize="sm">
          Developed by Sainath Sapa{" "}
          
        </Text>
      </Box>
    </Box>
  );
}
