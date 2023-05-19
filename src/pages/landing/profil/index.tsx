import Nav from "@/utils/layout/navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../types/types";

export default function Profil(){
    const [response, setResponse] = useState<User>();

    function getData() {
        axios
          .get("http://localhost:8080/user", {
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

      useEffect(() => getData(), []);

    return (
        <div>
            <header>
                <Nav/>
            </header>
            <div className="profil-nav">
                <div className="container">
                    <div className="container-img">
                        <img src="/images/avatar.jpg" alt="Avatar" />
                        <p>{response?.user.bio}</p>
                        <p>{`sign up on: ${response?.user.createdAt}`}</p>
                        <p>{`update on: ${response?.user.updatedAt}`}</p>
                    </div>
                    <div className="child">
                        <h3>{response?.user.name}</h3>
                        <h3>Contact :</h3>
                        <p>{response?.user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}