import { LoginProps } from "@/utils/types/propsTypes";
import { LoginType } from "@/utils/types/User";
import AuthentificationFailed from "@/utils/ui/modals/login";
import { useForm } from "react-hook-form";

export default function Login({
  modalOpen,
  setModalOpen,
  sendLoginData,
  router,
}: LoginProps) {
  const { register, handleSubmit } = useForm();
  const close = () => {
    setModalOpen(false);
  };

  const onSubmit = (data: LoginType) => {
    console.log(data);
    sendLoginData(data);
  };

  return (
    <div className="wrapper fadeInDow">
      <div className="formContent" onClick={close}>
        <h2 className="active">Sign in</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            id="email"
            className="fadeIn second"
            placeholder="email"
            {...register("email")}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            placeholder="password"
            {...register("password")}
          />
          <button type="submit" className="fadeIn fourth">
            LOG IN
          </button>
          <button onClick={router} className="fadeIn fourth">
            SIGN UP
          </button>
          {modalOpen && (
            <AuthentificationFailed handleClose={close} modalOpen={modalOpen} />
          )}
        </form>
      </div>
    </div>
  );
}
