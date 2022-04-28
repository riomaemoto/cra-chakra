/* eslint-disable react-hooks/exhaustive-deps*/
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { UserCard } from "../parts/layout/card/user_card";
import { UseAllUsers } from "../../hooks/use_all_users";

export const UserManegement: VFC = memo(() => {
  const { getUsers, loading, users } = UseAllUsers();

  useEffect(() => getUsers, []);
  return (
    <>
      {loading ? (
        <Center h={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users?.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
