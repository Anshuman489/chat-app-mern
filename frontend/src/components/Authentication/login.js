import React, { useState } from "react";
import { VStack, Input, Field, Button, Box } from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = () => {};

  return (
    <VStack spacing="5px">
      <Field.Root id="email" required>
        <Field.Label>
          Email Address
          <Field.RequiredIndicator />
        </Field.Label>
        <Input
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field.Root>
      <Field.Root id="password" required>
        <Field.Label>
          Password
          <Field.RequiredIndicator />
        </Field.Label>
        <Box position="relative" width="100%">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            paddingRight="4.5rem"
          />
          <Button
            position="absolute"
            right="0.5rem"
            top="50%"
            transform="translateY(-50%)"
            h="1.75rem"
            variant="surface"
            size="sm"
            onClick={handleClick}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </Box>
      </Field.Root>
      <Button
        colorPalette="blue"
        variant="solid"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorPalette="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
