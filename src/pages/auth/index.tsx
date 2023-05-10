import { ADMIN_TOKEN } from "@/secrets/token";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

export async function getServerSideProps(context: any) {
  const token = ADMIN_TOKEN;

  // Configurer l'en-tête Authorization avec le JWT token
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // Effectuer l'appel à l'API avec les en-têtes d'authentification
  const res = await axios.get("http://localhost:3000/user", { headers });
  const data = res.data;

  // Retourne les données en tant que propriété
  return {
    props: {
      data,
    },
  };
}

export default function SignIn({ data }: any) {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = new FormData(event.currentTarget);
    const emailValue = content.get("email") as string;
    setEmail(emailValue);
    authentificated(emailValue);
  }

  function authentificated(emailValue: string) {
    if (emailValue === data.email) {
      router.push("/home");
    } else {
      router.push("/auth/signup");
    }
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
        </form>
      </div>
    </div>
  );
}
