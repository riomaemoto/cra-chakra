import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { UseMessage } from "./use_message";

export const useAllUsers = () => {
  const { showMessage } = UseMessage();
  const [loading, setLoading] = useState(false);
  const [users, setUser] = useState<User[]>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        showMessage({ title: "Couldn't find user", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [showMessage, setLoading, setUser]);
  return { getUsers, loading, users };
};
