import { SetStateAction } from "react"

export interface LoginProps {
    modalOpen: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    sendLogin: any
}