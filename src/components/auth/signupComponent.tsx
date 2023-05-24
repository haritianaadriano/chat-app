import { CreateUser } from "@/utils/types/User";
import { SignupProps } from "@/utils/types/propsTypes";
import CreatedSuccessfully from "@/utils/ui/modals/signup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export function Signup({
  modalOpen,
  router,
  setModalOpen,
  sendSignUpData,
}: SignupProps) {
  const schemas = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    name: yup.string().required(),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schemas),
  });

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
          <p className="p-error">{String(errors.email?.message)}</p>
          <input
            type="text"
            id="password"
            className="fadeIn third"
            placeholder="password"
            {...register("password")}
          />
          <p className="p-error">{String(errors.password?.message)}</p>
          <input
            type="text"
            id="name"
            className="fadeIn fourth"
            placeholder="name"
            {...register("name")}
          />
          <p className="p-error">{String(errors.name?.message)}</p>
          <button type="submit" className="fadeIn fourth">
            SIGN UP
          </button>
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
