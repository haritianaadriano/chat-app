import Login from "@/components/login";
import { sendLogin } from "@/lib/api/login";
import React, { useState } from "react";

export default function SignIn() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="wrapper fadeInDow">
      <Login
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sendLogin={sendLogin}
      />
    </div>
  );
}
