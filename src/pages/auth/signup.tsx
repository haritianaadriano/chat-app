import React from "react";

export default function SignUp(){
    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    }
    return(
        <div className="wrapper fadeInDow">
            <div className="formContent">
                <h2 className="active">Sign up</h2>
                <form>
                    <input 
                        type="text"
                        id="email"
                        className="fadeIn second"
                        name="login"
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