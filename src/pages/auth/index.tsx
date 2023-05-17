import AuthentificationFailed from "@/utils/modals/login";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const close = () => {setModalOpen(false)};
  const open = () => {setModalOpen(true)};

  function sendData() {
    console.log(login);
    event?.preventDefault();
    axios
      .post("http://localhost:8080/users/login", login, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          return response.data;
        } 
      })
      .then(data => {
        sessionStorage.setItem("token", data.user.token);
        router.push("/landing");
      })
      .catch(error => {
        console.error(error)
        open();
      });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setLogin(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function signup() {
    event?.preventDefault();
    router.push("/auth/signup");
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
            value={login.email}
            onChange={handleChange}
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            value={login.password}
            onChange={handleChange}
          />
          <button className="fadeIn fourth" onClick={sendData}>
            LOG IN
          </button>
          <button onClick={signup} className="fadeIn fourth">
            SIGN UP
          </button>
          {modalOpen && <AuthentificationFailed handleClose={close} modalOpen={modalOpen}/>}
        </form>
      </div>
    </div>
  );
}
