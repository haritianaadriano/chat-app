import { ResponseMessage } from "@/utils/types/Message";
import axios from "axios";
import { SetStateAction } from "react";
import { BACKEND_BASE_URL } from "../../../env";
import Cookies from "js-cookie";

export function getMessageByChannelId(
  setResponse: React.Dispatch<SetStateAction<ResponseMessage | undefined>>,
  Channel_id: number
) {
    axios
    .get(`${BACKEND_BASE_URL}/messages/channel/${Channel_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setResponse(response.data);
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

export function getMessageByUser(
  setResponse: React.Dispatch<SetStateAction<ResponseMessage | undefined>>,
  Channel_id: number
) {
    axios
    .get(`${BACKEND_BASE_URL}/messages/channel/${Channel_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setResponse(response.data);
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
