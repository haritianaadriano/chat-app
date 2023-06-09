import { UpdatedUser } from "@/types/User";
import { EditProfilProps } from "@/types/propsTypes";
import HandleSuccess from "@/utils/ui/modals/successHandling";
import { useForm } from "react-hook-form";

export default function EditProfilComponent({
  sendUpdatedProfil,
  modalOpen,
}: EditProfilProps) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: UpdatedUser) => {
    console.log(data);
    sendUpdatedProfil(data);
  };

  return (
    <div>
      <div className="wrapper fadeInDow">
        <div className="formContent">
          <h2 className="active">Edit profil</h2>
          <p className="active">Help people to know you ...</p>
          <form onSubmit={handleSubmit(() => onSubmit)}>
            <input
              type="text"
              id="name"
              className="fadeIn second"
              placeholder="name"
              {...register("name")}
            />
            <input
              type="text"
              id="oldPassword"
              className="fadeIn third"
              placeholder="oldPassword"
              {...register("oldPassword")}
            />
            <input
              type="text"
              id="password"
              className="fadeIn fourth"
              placeholder="password"
              {...register("password")}
            />
            <input
              type="text"
              id="bio"
              className="fadeIn fourth"
              placeholder="bio"
              {...register("bio")}
            />
            <button type="submit" className="fadeIn fourth">
              UPDATE
            </button>
            {modalOpen && (
              <HandleSuccess handleClose={close} modalOpen={modalOpen} />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
