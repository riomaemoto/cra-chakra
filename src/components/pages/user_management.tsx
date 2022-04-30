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
import { useSelectUsers } from "../../hooks/useSelectUsers";
export const UserManegement: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUsers();

  useEffect(() => getUsers(), []);

  const onClickUser = (id: number) => {
    onSelectUser({ id, users, onOpen });
  };

  return (
    <>
      {loading ? (
        <Center h={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users?.map((item, id) => (
            <WrapItem key={item.id}>
              <UserCard
                id={item.id}
                imageUrl={"https://source.unsplash.com/random/" + item.id}
                userName={item.username}
                fullName={item.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
