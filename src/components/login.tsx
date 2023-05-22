import { LoginProps } from "@/utils/types/propsTypes";
import AuthentificationFailed from "@/utils/ui/modals/login";
import { useRouter } from "next/router";

export default function Login({modalOpen, setModalOpen, sendLogin, setData}: LoginProps){
    const router = useRouter();
    const close = () => {setModalOpen(false)};
    
    const moveToSignUp = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        router.push("/sign-up");
    }
    
    return (
        <div className="wrapper fadeInDow">
            <div 
                className="formContent"
                onClick={close}
            >
                <h2 className="active">Sign in</h2>
                <form>
                    <input
                        type="text"
                        id="email"
                        className="fadeIn second"
                        name="email"
                        placeholder="email"
                    />
                    <input
                        type="text"
                        id="password"
                        className="fadeIn third"
                        name="password"
                        placeholder="password"
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