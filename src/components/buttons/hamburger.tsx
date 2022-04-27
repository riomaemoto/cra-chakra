import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onOpen: () => void;
  // これの意味？
};

export const Hamburger: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  // const { onOpen } = useDisclosure();なぜここではこう書かないか？
  return (
    <>
      <IconButton
        aria-label={"menu_button"}
        icon={<HamburgerIcon />}
        size={"md"}
        variant={"unstyled"}
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
      />
    </>
  );
});
