import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const UseMessage = () => {
  const toast = useToast();
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        // you can write it like this title, status, is bc u gave the same props name at type Props. if not u need to write like title: "your original props name",status: "your original props name"
        title,
        status,
        position: "top",
        duration: 400,
        isClosable: true,
      });
    },
    [toast]
  );
  return { showMessage };
};
