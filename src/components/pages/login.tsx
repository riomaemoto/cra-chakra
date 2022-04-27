import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { PrimaryButton } from "../buttons/primary_button";

export const Login: VFC = memo(() => {
  return (
    <>
      <Flex align={"center"} justify={"center"} height={"100vh"}>
        <Box bg={"white"} w={"sm"} p={4} borderRadius={"md"} shadow={"md"}>
          <Heading as="h1" size={"lg"} textAlign={"center"}>
            User Manege App
          </Heading>
          <Divider my={4} />
          <Stack spacing={6} py={4} px={10}>
            <Input placeholder="User ID" />
            <PrimaryButton>Login</PrimaryButton>
          </Stack>
        </Box>
      </Flex>
    </>
  );
});
