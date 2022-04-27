import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../buttons/primary_button";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState("");

  const changeUserId = (event: ChangeEvent<HTMLInputElement>) =>
    setUserId(event.target.value);

  const onClickLogin = () => login(userId);
  return (
    <>
      <Flex align={"center"} justify={"center"} height={"100vh"}>
        <Box bg={"white"} w={"sm"} p={4} borderRadius={"md"} shadow={"md"}>
          <Heading as="h1" size={"lg"} textAlign={"center"}>
            User Manege App
          </Heading>
          <Divider my={4} />
          <Stack spacing={6} py={4} px={10}>
            <Input
              placeholder="User ID"
              value={userId}
              onChange={changeUserId}
            />
            <PrimaryButton
              disable={userId === ""}
              load={loading}
              whenClick={onClickLogin}
            >
              Login
            </PrimaryButton>
          </Stack>
        </Box>
      </Flex>
    </>
  );
});
