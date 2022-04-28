import { Flex, Heading, Box, Link, useDisclosure } from "@chakra-ui/react";
import { VFC } from "react";
import { useHistory } from "react-router-dom";
import { Hamburger } from "../../buttons/hamburger";
import { MenuDrawer } from "../../menu/menu_drawer";

export const Header: VFC = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const history = useHistory();

  const goHome = () => history.push("/home");
  const goUserManagement = () => history.push("/home/user_management");
  const goSetting = () => history.push("/home/setting");

  return (
    <>
      <Flex
        as={"nav"}
        bg={"teal.500"}
        color={"gray.50"}
        align={"center"}
        justify={"space-between"}
        padding={{ base: "3", md: "5" }}
      >
        <Flex
          align={"center"}
          as={"a"}
          mr={"8"}
          _hover={{ cursor: "pointer" }}
          onClick={goHome}
        >
          <Heading as={"h1"} fontSize={{ base: "md", md: "lg" }}>
            User Account Manage App
          </Heading>
        </Flex>
        <Flex
          align={"center"}
          fontSize={"sm"}
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={goUserManagement}>Manage Users</Link>
          </Box>
          <Link onClick={goSetting}>Setting</Link>
        </Flex>
        <Hamburger whenOpen={onOpen} />
      </Flex>
      <MenuDrawer
        close={onClose}
        hasOpen={isOpen}
        onClickHome={goHome}
        onClickUsermanagement={goUserManagement}
        onClickSetting={goSetting}
      />
    </>
  );
};
