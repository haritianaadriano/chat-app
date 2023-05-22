import { Inter } from 'next/font/google'
import Login from "@/components/login";
import { sendLogin } from "@/lib/api/login";
import React, { useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="wrapper fadeInDow">
      <Login
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sendLogin={sendLogin}
      />
    </div>
  )
}
