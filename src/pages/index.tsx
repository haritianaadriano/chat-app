import { Inter } from 'next/font/google'
import Login from "@/components/login";
import { sendLogin } from "@/lib/api/login";
import React, { useState } from "react";
import { LoginType } from '@/utils/types/types';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState<LoginType>();

  return (
    <div className="wrapper fadeInDow">
      <Login
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sendLogin={sendLogin}
        setData={setData}
      />
    </div>
  )
}
