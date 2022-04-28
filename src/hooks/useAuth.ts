import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { UseMessage } from "./use_message";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = UseMessage();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "Loged in.", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "Couldn't login ", status: "error" });
          }
        })
        .catch(() => showMessage({ title: "User not found", status: "error" }))
        .finally(() => setLoading(false));
    },
    [history, showMessage]
  );

  return { login, loading };
};
