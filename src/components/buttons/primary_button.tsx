import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  disable?: boolean;
  load?: boolean;
  onClick: () => void;
  // this means u need to have children in this PrimaryButton tag
};

export const PrimaryButton: VFC<Props> = (props) => {
  const { children, disable = false, load = false, onClick } = props;
  // when adding props don't forget to add it in here too! ↑
  return (
    <>
      <Button
        bg={"teal.400"}
        color={"white"}
        _hover={{ opacity: 0.8 }}
        disabled={disable || load}
        isLoading={load}
        onClick={onClick}
      >
        {children}
        {/* this is where children appear */}
      </Button>
    </>
  );
};
