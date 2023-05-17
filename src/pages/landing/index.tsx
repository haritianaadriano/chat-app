import Nav from "@/utils/layout/navbar";
import { useRouter } from "next/router";

export default function Home(){
    const router = useRouter();
    const channel = () => router.push("/landing/channel");
    const chat = () => router.push("/chat");
    
    return (
        <div>
            <header>
                <Nav/>
            </header>
            <div>
                <div className="welcoming">
                    <h3>Welcome to Chat-tsik</h3>
                    <p>
                        Getting started with ...
                    </p>
                </div>
                <div className="container">
                    <div className="cookieCard">
                        <p className="cookieHeading">Meet new person.</p>
                        <p className="cookieDescription">Choose who can be your friend ...</p>
                    </div>
                    <div className="cookieCard" onClick={chat}>
                        <p className="cookieHeading">Let's chat.</p>
                        <p className="cookieDescription">Already have someone to talk ? ...</p>
                    </div>
                    <div className="cookieCard" onClick={channel}>
                        <p className="cookieHeading">Go to channel.</p>
                        <p className="cookieDescription">Share your activity ...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}