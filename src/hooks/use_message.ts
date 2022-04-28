import { useToast } from "@chakra-ui/react";

type Propsboy = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const UseMessage = () => {
  const toast = useToast();
  const showMessage = (abc: Propsboy) => {
    const { title, status } = abc;
    toast({
      // you can write it like this title, status, is bc u gave the same props name at type Props. if not u need to write like title: "your original props name",status: "your original props name"
      title,
      status,
      position: "top",
      duration: 400,
      isClosable: true,
    });
  };
  return { showMessage };
};
