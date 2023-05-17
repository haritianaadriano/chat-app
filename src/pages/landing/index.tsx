import Nav from "@/utils/layout/navbar";
import HandleError from "@/utils/modals/errorHandling";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home(){
    const router = useRouter();
    const [data, setData] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => {setModalOpen(false)};
    const open = () => {setModalOpen(true)};
    const chat = () => router.push("/chat");

    function getData() {
        event?.preventDefault();
        axios
          .get("http://localhost:8080/channels", {
            headers: {
              "Content-Type": "application/json",
              "Authorization": sessionStorage.getItem("token")
            }
          })
          .then(response => {
            if (response.status === 200) {
              console.log(response);
              return response.data;
            } 
          })
          .then(data => {
            setData(data);
            console.log(data);
          })
          .catch(error => {
            console.error(error)
            open();
          });
      }
    
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
                    <div className="cookieCard" onClick={getData}>
                        <p className="cookieHeading">Go to channel.</p>
                        <p className="cookieDescription">Share your activity ...</p>
                    </div>
                </div>
            </div>
            {modalOpen && <HandleError message={"sorry create a chanel"} handleClose={close} modalOpen={modalOpen}/>}
            {modalOpen && <button>Create channel</button>}
        </div>
    )
}