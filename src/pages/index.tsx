import { Inter } from "next/font/google";
import Login from "@/components/loginComponent";
import { sendLogin } from "@/lib/api/loginApi";
import React, { useEffect, useState } from "react";
import { LoginType } from "@/utils/types/types";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  function moveToSignup() {
    router.push("/sign-up");
  }

  function sendLoginData(data: LoginType) {
    sendLogin( data, setModalOpen );
  }

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
