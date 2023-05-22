import { moveToSignUp } from "@/routing/routing";
import { LoginProps } from "@/utils/types/propsTypes";
import AuthentificationFailed from "@/utils/ui/modals/login";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Login({modalOpen, setModalOpen, sendLogin, setData, setInputCompleted}: LoginProps){
    const {register, handleSubmit, watch} = useForm();
    const close = () => {setModalOpen(false)};

    useEffect(() => {
        const email = watch("email");
        const password = watch("password");
        const isInputCompleted = email && password;
        setInputCompleted(isInputCompleted);
      }, [watch, setInputCompleted]);
    
    return (
        <div className="wrapper fadeInDow">
            <div 
                className="formContent"
                onClick={close}
            >
                <h2 className="active">Sign in</h2>
                <form onSubmit={handleSubmit(setData)}>
                    <input
                        type="text"
                        id="email"
                        className="fadeIn second"
                        placeholder="email"
                        {...register("email")}
                    />
                    <input
                        type="password"
                        id="password"
                        className="fadeIn third"
                        placeholder="password"
                        {...register("password")}
                    />
                    <button className="fadeIn fourth" onClick={sendLogin}>
                        LOG IN
                    </button>
                    <button onClick={moveToSignUp} className="fadeIn fourth">
                        SIGN UP
                    </button>
                {modalOpen && <AuthentificationFailed handleClose={close} modalOpen={modalOpen}/>}
                </form>
        </div>
    </div>
    )
}