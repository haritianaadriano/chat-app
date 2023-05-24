import { SetStateAction } from "react";
import { ResponseChannel, UserOption } from "./Channel";
import { ResponseMessage } from "./Message";

export interface LoginProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sendLoginData: any;
  router: any;
}

export interface SignupProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sendSignUpData: any;
  router: any;
}

export interface ChannelProps {
  response: ResponseChannel;
}

export interface CreateChannelProps {
  setUsersOptions?: any
  users?: any
  usersAdded?: any
  UsersSelected?: any
  setUsersAdded?: any;
  handleClick?: any
  handleClose?: any;
  dropIn?: any;
  modalOpen?: boolean;
  openSuccess?: boolean;
  openSuccessModal?: any;
  openFailModal?: any;
  closeSuccessModal?: any;
  closeFailModal?: any;
  usersOptions?: UserOption[]
}

export interface MessageProps {
  response: ResponseMessage
}

export interface ChannelMessageProps {
  response: ResponseMessage | undefined
  setMessageContent: React.Dispatch<SetStateAction<String | undefined>>
  handleClick: any
  moveToEditChannel: any
}
