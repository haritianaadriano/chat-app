import { CreateUser } from "@/utils/types/User";
import { SignupProps } from "@/utils/types/propsTypes";
import CreatedSuccessfully from "@/utils/ui/modals/signup";
import { useForm } from "react-hook-form";

export function Signup({
  modalOpen,
  router,
  setModalOpen,
  sendSignUpData,
}: SignupProps) {
  const { register, handleSubmit } = useForm();
  const close = () => {
    setModalOpen(false);
  };
  
  const onSubmit = (data: CreateUser) => {
    console.log(data);
    sendSignUpData(data);
  };

  return (
    <div className="wrapper fadeInDow">
      <div className="formContent" onClick={close}>
        <h2 className="active">Sign up</h2>
        <p className="active">Create your own account</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            id="email"
            className="fadeIn second"
            placeholder="email"
            {...register("email")}
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            placeholder="password"
            {...register("password")}
          />
          <input
            type="text"
            id="name"
            className="fadeIn fourth"
            placeholder="name"
            {...register("name")}
          />
          <button type="submit" className="fadeIn fourth">SIGN UP</button>
          <button className="fadeIn fourth" onClick={router}>
            LOG IN
          </button>
          {modalOpen && (
            <CreatedSuccessfully handleClose={close} modalOpen={modalOpen} />
          )}
        </form>
      </div>
    </div>
  );
}
