import { Inter } from 'next/font/google'
import Login from "@/components/login";
import { sendLogin } from "@/lib/api/login";
import React, { useEffect, useState } from "react";
import { LoginType } from '@/utils/types/types';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState<LoginType>();
  const [inputCompleted, setInputCompleted] = useState(false);

  function sendLoginData(){
    inputCompleted ? sendLogin(data) : ""; 
  }

  useEffect(sendLoginData, []);

  return (
    <div className="wrapper fadeInDow">
      <Login
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sendLogin={sendLogin}
        setData={setData}
        setInputCompleted={setInputCompleted}
      />
    </div>
  )
}
