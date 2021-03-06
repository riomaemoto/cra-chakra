import { VFC } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

type Props = {
  close: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUsermanagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = ({
  close,
  isOpen,
  onClickHome,
  onClickUsermanagement,
  onClickSetting,
}) => {
  return (
    <>
      <Drawer placement={"left"} size={"xs"} onClose={close} isOpen={isOpen}>
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
};
