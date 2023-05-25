import { Users } from "@/types/User";
import axios from "axios";
import { SetStateAction } from "react";
import { BACKEND_BASE_URL } from "../../../env";
import Cookies from "js-cookie";

export function getUsers(
  setUsers: React.Dispatch<SetStateAction<Users | undefined>>
) {
  axios
    .get(`${BACKEND_BASE_URL}/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
    })
    .then((data) => {
      console.log(data);
      setUsers(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
