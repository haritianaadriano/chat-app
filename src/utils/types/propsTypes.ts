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
