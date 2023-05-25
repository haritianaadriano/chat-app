import EditProfilComponent from "@/components/profil/editProfilComponent";
import { updateProfil } from "@/lib/api/profileApi";
import { UpdatedUser } from "@/types/User";
import Nav from "@/utils/ui/layout/navbar";
import { useState } from "react";

export default function EditProfil() {
  const [modalOpen, setModalOpen] = useState(false);
  function sendUpdatedProfil(data: UpdatedUser) {
    updateProfil(data);
  }

  return (
    <div>
      <header>
        <Nav />
      </header>
      <div>
        <EditProfilComponent
          modalOpen={modalOpen}
          sendUpdatedProfil={sendUpdatedProfil}
        />
      </div>
    </div>
  );
}
