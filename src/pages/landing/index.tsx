import Nav from "@/utils/ui/layout/navbar";
import HandleError from "@/utils/ui/modals/errorHandling";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import CreateChannel from "./channel/create";

export default function Home(){
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const [createOpen, setCreateOpen] = useState(false);
    const close = () => {setModalOpen(false)};
    const open = () => {setModalOpen(true)};
    const chat = () => router.push("/landing/chat");
    const channel = () => router.push("/landing/channel");
    const profil = () => router.push("/landing/profil");

    function getData() {
        event?.preventDefault();
        axios
          .get("http://localhost:8080/channels", {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
          })
          .then(response => {
            if (response.status >= 200 && response.status < 300) {
              console.log(response);
              channel();
              return response.data;
            } 
            else if(response.status == 304 || response.status == 301){
              open();
            }
          })
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error(error)
            open();
          });
      }

      function openCreate(){
        setCreateOpen(true);
        setModalOpen(false);
      }
      function closeCreate(){
        setCreateOpen(false);
      }
    
    return (
        <div>
            <header>
                <Nav/>
            </header>
            <div onClick={closeCreate}>
                <div className="welcoming">
                    <h1>Welcome to Chat-tsik {`"${sessionStorage.getItem("username")}"`}</h1>
                    <p>
                        Getting started with ...
                    </p>
                </div>
                <div className="container-prime">
                    <div className="cookieCard" onClick={profil}>
                        <p className="cookieHeading">View profile.</p>
                        <p className="cookieDescription">Let people know who you are ...</p>
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
            {createOpen && <CreateChannel handleClose={close}/>}
            {modalOpen && <HandleError message={"you don't have a chanel please create"} handleClose={close} modalOpen={modalOpen}/>}
            {modalOpen && <button onClick={openCreate}>Create channel</button>}
        </div>
    )
}