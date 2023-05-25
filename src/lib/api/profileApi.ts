import axios from "axios";
import Cookies from "js-cookie";
import { BACKEND_BASE_URL } from "../../../env";
import { SetStateAction } from "react";
import { UpdatedUser, User } from "@/types/User";

export function getProfil(
  setResponse: React.Dispatch<SetStateAction<User | undefined>>
) {
  axios
    .get(`${BACKEND_BASE_URL}/user`, {
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
      setResponse(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function updateProfil(data: UpdatedUser) {
  axios
    .put(`${BACKEND_BASE_URL}/user`, {
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
    })
    .catch((error) => {
      console.error(error);
    });
}
