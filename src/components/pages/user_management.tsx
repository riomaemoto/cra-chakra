/* eslint-disable react-hooks/exhaustive-deps*/
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, VFC } from "react";
import { UserCard } from "../parts/layout/card/user_card";
import { useAllUsers } from "../../hooks/use_all_users";
import { UserModal } from "../parts/layout/card/user_modal";

export const UserManegement: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), []);

  return (
    <>
      {loading ? (
        <Center h={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users?.map((item) => (
            <WrapItem key={item.id}>
              <UserCard
                imageUrl={"https://source.unsplash.com/random/" + item.id}
                userName={item.username}
                fullName={item.name}
                onClick={onOpen}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
