import { useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "@/utils/backdrop/backdrop";
import axios from "axios";
import HandleError from "@/utils/modals/errorHandling";
import HandleSuccess from "@/utils/modals/successHandling";
import { useRouter } from "next/router";

export default function CreateChannel({ handleClose }: any) {
    const [openSuccess, setOpenSuccess] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();
    const closeModalSuccess = () => {setOpenSuccess(false)};
    const openModalSuccess = () => {setOpenSuccess(true)};
    const close = () => {setModalOpen(false)};
    const open = () => {setModalOpen(true)};
  const [channel, setChannel] = useState({
    name: "",
    type: "",
    members: [] as number[]
  });

  const dropIn = {
    hidden: {
      y: "-100vh"
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 100,
        stiffness: 500
      }
    },
    exit: {
      y: "100vh",
      opacity: 0
    }
  };

  function convertMembersToArray(value: string): number[] {
    const members = value.split(",").map(member => parseInt(member.trim(), 10));
    return members.filter(member => !isNaN(member));
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    if (name === "members") {
      const members = convertMembersToArray(value);

      setChannel(prevState => ({
        ...prevState,
        [name]: members
      }));
    } else {
      setChannel(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  }

  function sendData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(channel);
    console.log(sessionStorage.getItem("token"));
    
    axios
      .post("http://localhost:8080/channel", channel, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
          }
      })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response);
          openModalSuccess();
          return response.data;
        } else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      })
      .then(data => {})
      .catch(error => {
        open();
        console.error(error);
      });
  }

  return (
    <div>
      <Backdrop onClick={()=>handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation}
          className="form-channel"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <form onSubmit={sendData}>
            <h3>Share your pation ...</h3>
            <input
              type="text"
              id="name"
              className="fadeIn second"
              name="name"
              placeholder="name"
              value={channel.name}
              onChange={handleChange}
            />
            <input
              type="text"
              id="type"
              className="fadeIn third"
              name="type"
              placeholder="type"
              value={channel.type}
              onChange={handleChange}
            />
            <input
              type="text"
              id="members"
              className="fadeIn fourth"
              name="members"
              placeholder="members"
              value={channel.members.join(",")}
              onChange={handleChange}
            />
            <button type="submit">
              Create Channel
            </button>
          </form>
        </motion.div>
        {modalOpen && <HandleError message={"Error when creating channel"} handleClose={close} modalOpen={modalOpen}/>}
        {openSuccess && <HandleSuccess message={"Channel created successfully"} handleClose={close} modalOpen={modalOpen}/>}
      </Backdrop>
    </div>
  );
}
