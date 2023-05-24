import CreateChannelComponent from "@/components/channel/createChannelComponent";
import Nav from "@/utils/ui/layout/navbar";
import { useState } from "react";

export default function CreateChannel({ handleClose }: any) {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const openSuccessModal = () => {
    setOpenSuccess(true);
  };
  const closeSuccessModal = () => {
    setOpenSuccess(false);
  };
  const openFailModal = () => {
    setModalOpen(true);
  };
  const closeFailModal = () => {
    setModalOpen(false);
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <div>
      <header>
        <Nav />
      </header>
      <CreateChannelComponent
        handleClose={handleClose}
        dropIn={dropIn}
        modalOpen={modalOpen}
        openSuccess={openSuccess}
        openSuccessModal={openSuccessModal}
        openFailModal={openFailModal}
        closeSuccessModal={closeSuccessModal}
        closeFailModal={closeFailModal}
      />
    </div>
  );
}
