import { useRouter } from "next/router";
import React, { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    name: "",
    bio: ""
  });

  function sendData() {
    console.log(signUp);
    event?.preventDefault();
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signUp)
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          return response.json();
        } 
        else if (response.status === 404) {
          throw new Error("User not found");
        } 
        else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      })
      .then(data => {
        sessionStorage.setItem("token", data.user.token);
        router.push("/home");
      })
      .catch(error => console.error(error));
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setSignUp(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function logIn() {
    event?.preventDefault();
    router.push("/auth");
  }

  return (
    <div className="wrapper fadeInDow">
      <div className="formContent">
        <h2 className="active">Sign up</h2>
        <p className="active">Create your own account</p>
        <form>
          <input
            type="text"
            id="email"
            className="fadeIn second"
            name="email"
            placeholder="email"
            value={signUp.email}
            onChange={handleChange}
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            value={signUp.password}
            onChange={handleChange}
          />
          <input
            type="text"
            id="name"
            className="fadeIn fourth"
            name="name"
            placeholder="name"
            value={signUp.name}
            onChange={handleChange}
          />
          <input
            type="text"
            id="bio"
            className="fadeIn five"
            name="bio"
            placeholder="bio"
            value={signUp.bio}
            onChange={handleChange}
          />
          <button className="fadeIn fourth" onClick={sendData}>
            SIGN UP
          </button>
          <button className="fadeIn fourth" onClick={logIn}>
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}
