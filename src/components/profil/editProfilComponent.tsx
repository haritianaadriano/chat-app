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
              className="fadeIn one"
              placeholder="name"
              {...register("name")}
            />
            <input
                type="email"
                id="email"
                className="fadeIn second"
                placeholder="email"
                {...register("email")}
            />
            <input
              type="password"
              id="currentPassword"
              className="fadeIn third"
              placeholder="current password"
              name="currentPassword"
            />
            <input
              type="password"
              id="newPassword"
              className="fadeIn fourth"
              placeholder="new password"
              {...register("password")}
            />
            <input
                type="password"
                id="confirmPassword"
                className="fadeIn fourth"
                placeholder="confirm Password"
                {...register("confirmPassword")}
            />
            <textarea
              id="bio"
              className="fadeIn fourth"
              placeholder="bio"
              {...register("bio")}
            />
            <button type="submit" className="updateProfilButton">
              Update Profile
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
