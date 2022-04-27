import {
  Flex,
  Heading,
  Box,
  Link,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Hamburger } from "../../buttons/hamburger";

export const Header: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
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
        <Flex align={"center"} as={"a"} mr={"8"} _hover={{ cursor: "pointer" }}>
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
            <Link>All Users</Link>
          </Box>
          <Link>Setting</Link>
        </Flex>
        <Hamburger onOpen={onOpen} />
      </Flex>
      <Drawer placement={"left"} size={"xs"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg={"gray.100"}>
              <Button w={"100%"}>Top</Button>
              <Button w={"100%"}>All Users</Button>
              <Button w={"100%"}>Setting</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
