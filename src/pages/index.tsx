import { Inter } from "next/font/google";
import Login from "@/components/auth/loginComponent";
import { sendLogin } from "@/lib/api/loginApi";
import React, { useState } from "react";
import { LoginType } from "@/utils/types/User";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  function moveToHome(){
    router.push("/landing");
  }

  function moveToSignup() {
    router.push("/sign-up");
  }

  function sendLoginData(data: LoginType) {
    sendLogin(data, setModalOpen, moveToHome);
  }
  console.log(Cookies.get("token"));
  

  return (
    <div className="wrapper fadeInDow">
      <Login
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sendLoginData={sendLoginData}
        router={moveToSignup}
      />
    </div>
  );
}
