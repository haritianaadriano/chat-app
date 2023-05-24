import EditChannelComponent from "@/components/channel/editChannelComponent";
import { editChannel } from "@/lib/api/channelApi";
import { getUsers } from "@/lib/api/userApi";
import { EditChannel, UserOption } from "@/utils/types/Channel";
import { Users } from "@/utils/types/User";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function EditChannel({ handleClose }: any) {
  const [data, setData] = useState<EditChannel>({
    channelId: 0,
    members: [0],
  });
  const [usersAdded, setUsersAdded] = useState<UserOption[]>([]);
  const [usersOptions, setUsersOptions] = useState<UserOption[]>([]);
  const [users, setUsers] = useState<Users>();
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

  class optionModel {
    label: String;
    value: number;
    constructor(value: number, label: String) {
      this.label = label;
      this.value = value;
    }
  }

  function handleClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    editChannel(data, openFailModal, openFailModal, Cookies.get("channel_id"));
  }

  function UsersSelected(users: UserOption[]) {
    return users.map((user) => {
      return user.value;
    });
  }

  function UsersOptions(users: Users) {
    let UsersOptions = [];
    for (let i = 0; i < users?.users.length; i++) {
      let newUserOption = new optionModel(
        users?.users[i].id,
        users?.users[i].name
      );
      UsersOptions.push(newUserOption);
    }
    return UsersOptions;
  }

  useEffect(() => {
    setData({
      ...data,
      channelId: parseInt(Cookies.get("channel_id") || "0", 10)
    });
  }, []);
  
  

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  useEffect(() => {
    if (users) {
      setUsersOptions(UsersOptions(users));
    }
  }, [users]);

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
      <EditChannelComponent
        data={data}
        setData={setData}
        usersAdded={usersAdded}
        UsersSelected={UsersSelected}
        setUsersAdded={setUsersAdded}
        handleClick={handleClick}
        usersOptions={usersOptions}
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
