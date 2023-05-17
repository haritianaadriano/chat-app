import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.css';

export default function Nav(){
    const router = useRouter();
    const home = () => router.push("/landing");
    const channel = () => router.push("/landing/channel");
    const chat = () => router.push("/chat");

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"> {/* Utilisation de justify-content-center pour centrer les éléments */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={home}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={channel}>
                                Channel
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={chat}>
                                Chat
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
