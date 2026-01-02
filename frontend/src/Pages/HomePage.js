import React from "react";
import { Container, Box, Text, Tabs } from "@chakra-ui/react";
import Login from "../components/Authentication/login";
import Signup from "../components/Authentication/signup";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="work sans" color="black">
          Chat-Hive
        </Text>
      </Box>
      <Box
        bg="white"
        color="black"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs.Root
          defaultValue="login"
          variant="plain"
          css={{
            "--tabs-indicator-bg": "colors.blue.500",
            "--tabs-indicator-shadow": "shadows.xs",
            "--tabs-trigger-radius": "radii.full",
          }}
        >
          <Tabs.List mb="1em" display="flex">
            <Tabs.Trigger value="login" flex="1" justifyContent="center">Login</Tabs.Trigger>
            <Tabs.Trigger value="signup" flex="1" justifyContent="center">Sign Up</Tabs.Trigger>
            <Tabs.Indicator />
          </Tabs.List>
          <Tabs.Content value="login">
            <Login />
          </Tabs.Content>
          <Tabs.Content value="signup">
            <Signup />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Container>
  );
};

export default HomePage;
