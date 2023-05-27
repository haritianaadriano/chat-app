import {
  Channel,
  CreateChannel,
  EditChannel,
  ResponseChannel,
} from "@/types/Channel";
import axios from "axios";
import Cookies from "js-cookie";
import { SetStateAction } from "react";
import { BACKEND_BASE_URL } from "../../../env";

//Get Channel
export function getChannels(
  setResponse: React.Dispatch<SetStateAction<ResponseChannel | undefined>>
) {
  axios
    .get(`${BACKEND_BASE_URL}/channels`, {
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

// Post Channel
export function sendChannel(
  data: CreateChannel,
  openSuccessModal: any,
  openFailModal: any
) {
  console.log(data);

  axios
    .post(`${BACKEND_BASE_URL}/channel`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        openSuccessModal();
        return response.data;
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    })
    .then((data) => {})
    .catch((error) => {
      openFailModal();
      console.error(error);
    });
}

// Put channel
export function editChannel(
  data: any,
  openSuccessModal: any,
  openFailModal: any,
  channel_id: any
) {
  console.log(data);
  openSuccessModal();

  axios
    .post(`${BACKEND_BASE_URL}/channels/${channel_id}/members`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
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
