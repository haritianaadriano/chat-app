import Nav from "@/utils/ui/layout/navbar";
import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { getProfil } from "@/lib/api/profileApi";
import Profil from "@/components/profil/profilComponent";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function ProfilHome() {
  const [response, setResponse] = useState<User>();
  const router = useRouter();

  const moveToEditProfil = () => {
    router.push(`/profil/edit/${Cookies.get("")}`);
  };

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
        <Profil response={response} moveToEditProfil={moveToEditProfil} />
      </div>
    </div>
  );
}
