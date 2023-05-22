import axios from "axios";
import { SetStateAction } from "react";
import { BACKEND_BASE_URL } from "../../../env";
import Cookies from "js-cookie";

export function sendLogin(
  data: any,
  setModalOpen: React.Dispatch<SetStateAction<boolean>>
) {
  axios
    .post(`${BACKEND_BASE_URL}/users/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        return response.data;
      }
    })
    .then((data) => {
      Cookies.set("token", data.user.token);
      Cookies.set("username", data.user.name);
      Cookies.set("id", data.user.id);
      console.log(data.user);
    })
    .catch((error) => {
      console.error(error);
      setModalOpen(true);
    });
}
