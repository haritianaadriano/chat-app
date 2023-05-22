import { useRouter } from "next/router";
import React, { useState } from "react";
import { Signup } from "@/components/signupComponent";
import { CreateUser } from "@/utils/types/User";
import { sendSignup } from "@/lib/api/signupApi";

export default function SignUp() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  function moveToLogin(){
    router.push("/");
  }

  function sendSignUpData(data: CreateUser) {
    sendSignup(data, setModalOpen);
  }

  return (
    <div>
      <Signup
        router={moveToLogin}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sendSignUpData={sendSignUpData}
      />
    </div>
  );
}
