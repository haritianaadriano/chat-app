import { LoginType } from "./types";

export interface LoginProps {
    modalOpen: boolean
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    sendLoginData: any
    router: any
  }
  