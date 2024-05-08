import { React, useState } from "react";
import authservice from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from ".../store/authSlice";
import { Button, Input, Logo } from "./index.js";
import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
function SignUp() {
  let Navigate = useNavigate();
  const [Error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const create = async (data) => {
    setError("");
    try {
      const userData = await authservice
        .createAccount(data)
        .then(alert("user Signed up Successfully!!"));
      if (userData) {
        const userData = await authservice.getCurrentUser();
        if (userData) dispatch(login(userData));
        Navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {Error && <p className="text-red-600 mt-8 text-center">{Error} </p>}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Name"
              placeholder="Enter your Full Name"
              {...register("name", { required: true })}
            />
            <Input
              label="Email:"
              placeholder="Enter your Email Address"
              {...register("email", {
                required: true,
                validate:{
                matchpattern: (value) =>
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                    value
                  ) || "Email must be a valid address"}
              })}
            />
            <Input label="Password" placeholder="Enter Your Password" type="Password" {...register("password",{required:true,validate: {
                matchPattern: (value) =>
                  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value) ||
                  "Enter a valid password!",
              },})}/>
              <Button type="Submit" className="w-full">Create Account </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
