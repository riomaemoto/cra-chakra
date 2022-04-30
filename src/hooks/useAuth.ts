import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { UseMessage } from "./use_message";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = UseMessage();
  const { setLoginUser } = useLoginUser();
  const [loading, setLoading] = useState(false);
  const login = (id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          setLoginUser(res.data);
          showMessage({ title: "Loged in.", status: "success" });
          history.push("/home");
        } else {
          showMessage({ title: "Couldn't login ", status: "error" });
          setLoading(false);
        }
      })
      .catch(() => showMessage({ title: "User not found", status: "error" }));
    setLoading(false);
  };

  return { login, loading };
};
