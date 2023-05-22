import { ResponseChannel } from "./Channel";
import { User } from "./User";

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
  handleClose: any;
  dropIn: any;
  modalOpen: boolean;
  openSuccess: boolean;
  openSuccessModal: any;
  openFailModal: any;
  closeSuccessModal: any;
  closeFailModal: any;
}
