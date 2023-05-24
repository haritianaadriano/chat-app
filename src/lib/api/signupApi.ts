import axios from "axios";
import { BACKEND_BASE_URL } from "../../../env";
import { SetStateAction } from "react";

export function sendSignup(
  data: any,
  setModalOpen: React.Dispatch<SetStateAction<boolean>>
) {
  setModalOpen(true);
  axios
    .post(`${BACKEND_BASE_URL}/users`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        return response.data;
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    })
    .then((data) => {})
    .catch((error) => {
      console.error(error);
    });
}
