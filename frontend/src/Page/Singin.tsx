import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginRequest } from "../Redux/Actions/action";

interface IFormInput {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
    const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {

    console.log("data ", data);

if (data ){
    dispatch(loginRequest(data))
}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        {...register("email", { required: "email is required" })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <TextField
        id="outlined-basic"
        label="PAssword"
        variant="outlined"
        {...register("password", { required: "password is required" })}
      />

      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignIn;
