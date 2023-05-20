import Nav from "@/utils/ui/layout/navbar";
import { useEffect, useState } from "react";
import { ResponseMessage } from "../../../utils/types/types";
import axios from "axios";

export default function Chat(){
    const [response, setResponse] = useState<ResponseMessage>();
    useEffect(() => getData(sessionStorage.getItem("id")), []);
    const [message, setMessage] = useState({
        channelId: 0,
        recipientId: 0,
        content: ""
    })

    function getData(userId: any) {
        event?.preventDefault();
        axios
          .get(`http://localhost:8080/messages/${userId}`, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
          })
          .then(response => {
            if (response.status >= 200 && response.status < 300) {
              console.log(response);
              return response.data;
            } 
            else {
              throw new Error(`Unexpected response status: ${response.status}`);
            }
          })
          .then(data => {
            setResponse(data);
            console.log(response);
            
          })
          .catch(error => {
            console.error(error);
            }
          );
      }

    function sendData() {
        event?.preventDefault();
        axios
          .post("http://localhost:8080/message", message, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
          })
          .then(response => {
            if (response.status >= 200 && response.status < 300) {
              console.log(response);
              return response.data;
            } 
            else {
              throw new Error(`Unexpected response status: ${response.status}`);
            }
          })
          .then(data => {
            
          })
          .catch(error => {
            console.error(error);
            }
          );
      }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setMessage(prevState => ({
          ...prevState,
          [name]: value
        }));
      }

    return(
        <div>
            <header>
                <Nav/>
            </header>
            <div>
                {response?.messages.map(message => {
                    return (
                        <div className="container">
                            <img src="/images/avatar.jpg" alt="Avatar"/>
                            <p>{message.content}</p>
                            <span className="time-right">{message.createdAt}</span>
                        </div>
                    )
                })}
            <form>
                <input
                    type="text"
                    id="content"
                    name="content"
                    placeholder="type"
                    value={message.content}
                    onChange={handleChange}
                />
                
                <button onClick={sendData}>
                    Send
                </button>
            </form>
        </div>
    </div>
    )
}