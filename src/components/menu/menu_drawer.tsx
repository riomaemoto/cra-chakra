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
  onClickHome: () => void;
  onClickUsermanagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { close, hasOpen, onClickHome, onClickUsermanagement, onClickSetting } =
    props;
  return (
    <>
      <Drawer placement={"left"} size={"xs"} onClose={close} isOpen={hasOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg={"gray.100"}>
              <Button onClick={onClickHome} w={"100%"}>
                Home
              </Button>
              <Button onClick={onClickUsermanagement} w={"100%"}>
                Manage Users
              </Button>
              <Button onClick={onClickSetting} w={"100%"}>
                Setting
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
