import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  // this means u need to have children in this PrimaryButton tag
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Button bg={"teal.400"} color={"white"} _hover={{ opacity: 0.8 }}>
        {children}
        {/* this is where children appear */}
      </Button>
    </>
  );
});
