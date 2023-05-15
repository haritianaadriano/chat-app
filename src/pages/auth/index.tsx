import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function SignIn({ data }: any) {
  const router = useRouter();
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });
  const [response, setResponse] = useState(null);

  async function sendData() {
    try{
      const res = await axios.post("http://localhost:3000/users/login", login);
      setResponse(res.data);
      console.log(response);
    }
    catch(error){
      console.log(error);
      signup();
    }
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = new FormData(event.currentTarget);
    const emailValue = content.get("email") as string;
    const passwordValue = content.get("password") as string;

    setLogin({
      ...login,
      email: emailValue,
      password: passwordValue
    })

    sendData();
  }

  function signup() {
      router.push("/auth/signup");
  }

  return (
    <div className="wrapper fadeInDow">
      <div className="formContent">
        <h2 className="active">Sign in</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            className="fadeIn second"
            name="email"
            placeholder="email"
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
          />
          <input type="submit" className="fadeIn fourth" value="Log in" />
          <button onClick={signup} className="fadeIn fourth">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}
