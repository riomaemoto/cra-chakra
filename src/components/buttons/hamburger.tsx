import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  whenOpen: () => void;
};

export const Hamburger: VFC<Props> = memo((props) => {
  const { whenOpen } = props;
  return (
    <>
      <IconButton
        aria-label={"menu_button"}
        icon={<HamburgerIcon />}
        size={"md"}
        variant={"unstyled"}
        display={{ base: "block", md: "none" }}
        onClick={whenOpen}
      />
    </>
  );
});
