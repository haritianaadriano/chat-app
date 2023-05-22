import { Channel, CreateChannel } from "@/utils/types/Channel";
import { CreateChannelProps } from "@/utils/types/propsTypes";
import Backdrop from "@/utils/ui/backdrop/backdrop";
import HandleError from "@/utils/ui/modals/errorHandling";
import HandleSuccess from "@/utils/ui/modals/successHandling";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { sendChannel } from "../../lib/api/channelApi";

export default function CreateChannelComponent({
  handleClose,
  dropIn,
  modalOpen,
  openSuccess,
  openSuccessModal,
  openFailModal,
  closeFailModal,
  closeSuccessModal
}: CreateChannelProps) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (
    data: CreateChannel
  ) => {
    console.log(data);
    sendChannel(data, openSuccessModal,openFailModal);
  };
  return (
    <div>
      <Backdrop onClick={() => handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation}
          className="form-channel"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Share your pation ...</h3>
            <input
              type="text"
              id="name"
              className="fadeIn second"
              placeholder="name"
              {...register("name")}
            />
            <input
              type="text"
              id="type"
              className="fadeIn third"
              placeholder="type"
              {...register("type")}
            />
            <input
              type="text"
              id="members"
              className="fadeIn fourth"
              placeholder="members"
              {...register("members")}
            />
            <button type="submit">Create Channel</button>
          </form>
        </motion.div>
        {modalOpen && (
          <HandleError
            message={"Error when creating channel"}
            handleClose={closeFailModal}
            modalOpen={modalOpen}
          />
        )}
        {openSuccess && (
          <HandleSuccess
            message={"Channel created successfully"}
            handleClose={closeSuccessModal}
            modalOpen={modalOpen}
          />
        )}
      </Backdrop>
    </div>
  );
}
