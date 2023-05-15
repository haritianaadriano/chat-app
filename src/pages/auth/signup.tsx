import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function SignUp(){
    const router = useRouter();
    const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    name: "",
    bio: ""
  });

  async function sendData() {
    try{
      const res = await axios.post("http://localhost:3000/users", signUp);
      console.log(res.data);
    }
    catch(error){
      console.log(error);
    }
  };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const content = new FormData(event.currentTarget);
        const emailValue = content.get("email") as string;
        const passwordValue = content.get("password") as string;
        const nameValue = content.get("name") as string;
        const bioValue = content.get("bio") as string;

        setSignUp({
            ...signUp,
            email: emailValue,
            password: passwordValue,
            name: nameValue,
            bio: bioValue
        })
        sendData();
    }
    return(
        <div className="wrapper fadeInDow">
            <div className="formContent">
                <h2 className="active">Sign up</h2>
                <p className="active">Create your own account</p>
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
                    <input
                        type="text"
                        id="name"
                        className="fadeIn fourth"
                        name="name"
                        placeholder="name"
                    />
                    <input
                        type="text"
                        id="bio"
                        className="fadeIn five"
                        name="bio"
                        placeholder="bio"
                    />
                    <input
                        type="submit"
                        className="fadeIn six"
                        value="Sign up"
                    />
                </form>
            </div>
        </div>
    )
}