import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState, VFC } from "react";
import { User } from "../../../../types/api/user";
import { PrimaryButton } from "../../../buttons/primary_button";

type Propsboy = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserModal: VFC<Propsboy> = (Propsboy) => {
  const { user, isOpen, isAdmin = false, onClose } = Propsboy;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onClick = () => alert();

  const onChangeUserName = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) =>
    setPhone(event.target.value);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset={"slideInBottom"}
      >
        <ModalOverlay />
        <ModalContent pb={2}>
          <ModalHeader>User info</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  value={username}
                  onChange={onChangeUserName}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  value={name}
                  onChange={onChangeName}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  value={email}
                  onChange={onChangeEmail}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input
                  value={phone}
                  onChange={onChangePhone}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClick}>Save</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
      ;
    </>
  );
};
