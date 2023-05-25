import { SetStateAction } from "react";
import { EditChannel, ResponseChannel, UserOption } from "./Channel";
import { ResponseMessage } from "./Message";

export interface EditProfilProps {
  sendUpdatedProfil: any;
  modalOpen: boolean;
}

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

export interface EditChannelProps {
  data: EditChannel;
  setData: React.Dispatch<SetStateAction<EditChannel>>;
  setUsersOptions?: React.Dispatch<SetStateAction<UserOption[]>>;
  users?: UserOption[];
  usersAdded?: UserOption[];
  UsersSelected?: any;
  setUsersAdded: React.Dispatch<SetStateAction<UserOption[]>>;
  handleClick?: any;
  handleClose?: any;
  dropIn?: any;
  modalOpen?: boolean;
  openSuccess?: boolean;
  openSuccessModal?: any;
  openFailModal?: any;
  closeSuccessModal?: any;
  closeFailModal?: any;
  usersOptions?: UserOption[];
}

export interface CreateChannelProps {
  handleClick?: any;
  handleClose?: any;
  dropIn?: any;
  modalOpen?: boolean;
  openSuccess?: boolean;
  openSuccessModal?: any;
  openFailModal?: any;
  closeSuccessModal?: any;
  closeFailModal?: any;
}

export interface MessageProps {
  response: ResponseMessage;
}

export interface ChannelMessageProps {
  response: ResponseMessage | undefined;
  setMessageContent: React.Dispatch<SetStateAction<String | undefined>>;
  handleClick: any;
  moveToEditChannel: any;
}
