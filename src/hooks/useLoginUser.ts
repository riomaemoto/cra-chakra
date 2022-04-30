import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../providers/loginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
