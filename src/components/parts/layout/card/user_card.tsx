import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { VFC } from "react";

type Propsboy = {
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: () => void;
};

export const UserCard: VFC<Propsboy> = ({
  imageUrl,
  userName,
  fullName,
  onClick,
}) => {
  return (
    <>
      <Box
        w={"260px"}
        h={"260px"}
        bg={"white"}
        borderRadius={"10px"}
        shadow={"md"}
        p={4}
        _hover={{ cursor: "pointer", opacity: 0.8 }}
        onClick={onClick}
      >
        <Stack textAlign={"center"}>
          <Image
            borderRadius={"full"}
            boxSize={"160px"}
            m={"auto"}
            alt={"profile picture"}
            src={imageUrl}
          />
          <Text fontSize={"lg"} fontWeight={"bold"}>
            {userName}
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            {fullName}
          </Text>
        </Stack>
      </Box>
    </>
  );
};
