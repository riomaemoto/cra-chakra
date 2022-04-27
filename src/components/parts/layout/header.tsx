import { Flex, Heading, Box, Link, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { memo, VFC } from "react";

export const Header: VFC = memo(() => {
  return (
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
      <IconButton
        aria-label={"menu_button"}
        icon={<HamburgerIcon />}
        size={"sm"}
        variant={"unstyled"}
        display={{ base: "block", md: "none" }}
      />
    </Flex>
  );
});
