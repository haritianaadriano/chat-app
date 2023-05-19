import { useEffect, useState } from "react";
import Nav from "@/utils/layout/navbar";
import axios from "axios";
import { Channel, ResponseChannel } from "../types/types";
import CreateChannel from "./create";

export default function Channel() {
  const [response, setResponse] = useState<ResponseChannel>();
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {setModalOpen(false)};
  const open = () => {setModalOpen(true)};

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("http://localhost:8080/channels", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.data;
        }
      })
      .then((data) => {
        console.log(data);
        setResponse(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <header>
        <Nav />
      </header>
        <div>
            {response && response.channels && response.channels.map((channel) => (
            <div className="channel-nav" onClick={close}>
              <div className="container-prime">
                <div className="container-img">
                  <img src="/images/avatar.jpg" alt="Avatar" />
                </div>
                <div key={channel.id}>
                  <h3>{`channel: ${channel.name}`}</h3>
                </div>
                <div>
                <h3>{`owner name: ${channel.owner.name}`}</h3>
                </div>
              </div>
            </div>
            ))}
        </div>
        <div className="welcoming">
            <h1>Welcome to my channel</h1>
            <button onClick={open}>Wanna create new Channel ?</button>
        {modalOpen && <CreateChannel handleClose={close}/>}
        </div>
    </div>
  );
}
