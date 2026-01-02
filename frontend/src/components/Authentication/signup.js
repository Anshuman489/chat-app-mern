import React, { useState } from "react";
import { VStack, Input, Field, Button, Box } from "@chakra-ui/react";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleClick = () => setShow(!show);
  const handleClickConfirm = () => setShowConfirm(!showConfirm);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  // const [pic, setPic] = useState();
  // const [picLoading, setPicLoading] = useState(false);

  const postDetails = (pics) => {};
  const submitHandler = () => {};

  return (
    <VStack spacing="5px">
      <Field.Root id="first-name" required>
        <Field.Label>
          Name
          <Field.RequiredIndicator />
        </Field.Label>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Field.Root>
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
            variant="solid"
            colorPalette="blue"
            size="sm"
            onClick={handleClick}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </Box>
      </Field.Root>
      <Field.Root id="password" required>
        <Field.Label>
          Confirm Password
          <Field.RequiredIndicator />
        </Field.Label>
        <Box position="relative" width="100%">
          <Input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
            paddingRight="4.5rem"
          />
          <Button
            position="absolute"
            right="0.5rem"
            top="50%"
            transform="translateY(-50%)"
            h="1.75rem"
            variant="solid"
            colorPalette="blue"
            size="sm"
            onClick={handleClickConfirm}
          >
            {showConfirm ? "Hide" : "Show"}
          </Button>
        </Box>
      </Field.Root>

      <Field.Root id="pic">
        <Field.Label>
          Upload your Picture
          <Field.RequiredIndicator />
        </Field.Label>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </Field.Root>
      <Button
        colorPalette="blue"
        variant="solid"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
