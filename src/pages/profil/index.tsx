import Nav from "@/utils/ui/layout/navbar";
import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { getProfil } from "@/lib/api/profileApi";
import Profil from "@/components/profil/profilComponent";
import Cookies from "js-cookie";

export default function ProfilHome() {
  const [response, setResponse] = useState<User>();
  if (Cookies.get("token") == null) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  useEffect(() => getProfil(setResponse), []);

  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="profil-nav">
        <Profil response={response} />
      </div>
    </div>
  );
}
