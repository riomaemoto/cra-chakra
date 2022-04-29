import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { VFC } from "react";

type Propsboy = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserModal: VFC<Propsboy> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset={"slideInBottom"}
      >
        <ModalOverlay />
        <ModalContent pb={6}>
          <ModalHeader>User info</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input value={"leo"} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input value={"leo moreno"} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input value={"leo@gmakiss.com"} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={"0987654"} isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      ;
    </>
  );
};
