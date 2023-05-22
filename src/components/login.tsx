import { moveToSignup } from "@/routing/login";
import { LoginProps } from "@/utils/types/propsTypes";
import AuthentificationFailed from "@/utils/ui/modals/login";

export default function Login({modalOpen, setModalOpen, sendLogin}: LoginProps){
    const close = () => {setModalOpen(false)};
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
                    <button onClick={moveToSignup} className="fadeIn fourth">
                        SIGN UP
                    </button>
                {modalOpen && <AuthentificationFailed handleClose={close} modalOpen={modalOpen}/>}
                </form>
        </div>
    </div>
    )
}