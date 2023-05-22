import Nav from "@/utils/ui/layout/navbar";
import { useEffect, useState } from "react";
import { User } from "../../utils/types/User";
import { getProfil } from "@/lib/api/profileApi";
import Profil from "@/components/profil/profilComponent";

export default function ProfilHome() {
  const [response, setResponse] = useState<User>();

  useEffect(() => getProfil(setResponse), []);

  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="profil-nav">
        <Profil
          response={response}
        />
      </div>
    </div>
  );
}
