import { EditChannelProps } from "@/types/propsTypes";
import Backdrop from "@/utils/ui/backdrop/backdrop";
import Nav from "@/utils/ui/layout/navbar";
import HandleSuccess from "@/utils/ui/modals/successHandling";
import { motion } from "framer-motion";
import Select from "react-select";

export default function EditChannelComponent({
  handleClose,
  dropIn,
  modalOpen,
  openSuccess,
  closeSuccessModal,
  closeFailModal,
  setUsersAdded,
  handleClick,
  usersOptions,
  usersAdded,
  UsersSelected,
  setData,
  data,
}: EditChannelProps) {
  const handleChange = async (selected: any, selectaction: any) => {
    const { action } = selectaction;
    if (action === "clear") {
    } else if (action === "select-option") {
    } else if (action === "remove-value") {
      console.log("remove");
    }
    setUsersAdded(selected);
    setData({
      ...data,
      members: UsersSelected(usersAdded),
    });
  };

  return (
    <div>
      <header>
        <Nav />
      </header>
      <Backdrop onClick={() => handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation}
          className="form-channel"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <form onSubmit={handleClick}>
            <h3>Wanna add your friend ...</h3>
            <Select
              id="selectUsers"
              instanceId="selectUsers"
              isMulti
              name="colors"
              className="basic-multi-select"
              classNamePrefix="select"
              options={usersOptions}
              onChange={handleChange}
              placeholder="Users"
            />
            <button type="submit">Edit Channel</button>
          </form>
        </motion.div>
        {openSuccess && (
          <HandleSuccess
            message={"Member added successfully"}
            handleClose={closeSuccessModal}
            modalOpen={modalOpen}
          />
        )}
      </Backdrop>
    </div>
  );
}
