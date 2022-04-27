import { VFC, memo } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

type Props = {
  close: () => void;
  hasOpen: boolean;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { close, hasOpen } = props;
  return (
    <>
      <Drawer placement={"left"} size={"xs"} onClose={close} isOpen={hasOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg={"gray.100"}>
              <Button w={"100%"}>Top</Button>
              <Button w={"100%"}>All Users</Button>
              <Button w={"100%"}>Setting</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
