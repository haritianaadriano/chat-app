import { useEffect, useState } from "react";
import Nav from "@/utils/layout/navbar";
import axios from "axios";
import { Channel, Response } from "../types/types";

export default function Channel() {
  const [response, setResponse] = useState<Response>();

  useEffect(() => {
    getData();
  }, []);

  function getChannelByUserId(channels: Array<Channel>) {
    const ownerId = sessionStorage.getItem("id");
    if (ownerId === null) {
      return [];
    }
    const ownerIdNumber = parseInt(ownerId, 10);
    return channels.filter((channel) => {
      return channel.ownerId === ownerIdNumber;
    });
  }

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
      <div className="profil-nav">
        <div>
            {response && response.channels && response.channels.map((channel) => (
              <div className="container">
                <div className="container-img">
                  <img src="/images/avatar.jpg" alt="Avatar" />
                </div>
                <div key={channel.id}>
                  <h3>{`channel: ${channel.owner.name}`}</h3>
                </div>
                <div>
                <h3>{`owner name: ${channel.owner.name}`}</h3>
                </div>
              </div>
            ))}
        </div>
        <div className="welcoming">
            <h1>Welcome to my channel</h1>
            <p>
              Becomming a friends ...
            </p>
        </div>
      </div>
    </div>
  );
}
