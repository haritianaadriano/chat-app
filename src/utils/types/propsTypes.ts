import { LoginType } from "./types";

export interface LoginProps {
    modalOpen: boolean
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    setData: React.Dispatch<React.SetStateAction<LoginType | undefined>>
    sendLogin: any
    setInputCompleted: React.Dispatch<React.SetStateAction<boolean>>
  }
  