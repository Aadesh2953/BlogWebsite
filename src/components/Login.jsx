import React,{useState} from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { login as authlogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux"
import authservice from "../appwrite/auth";
import {useForm} from "react-hook-form"
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const login = async (data) => {
    setError("");
    try {
      const session = await authservice.login(data);
      if (session) {
        const userData = await authservice.getCurrentUser();
        if (userData) {
          dispatch(authlogin(userData));
          navigate("/");
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
      </div>
      <p className="mt-2 text-center text-base text-black/60">
        Don&apos;t have any account?&nbsp;
        <Link
          to="/signup"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Sign Up
        </Link>
      </p>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit(login)} className="mt-8">
        <div className="space-y-8">
          <Input
            label="Email: "
            placeholder="Enter Your Email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                    value
                  ) || "Email must be a valid address",
              },
            })}
          />
          <Input
            label="Password: "
            placeholder="Enter Your Password"
            type="Password"
            {...register("password", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value) ||
                  "Enter a valid password!",
              },
            })}
          />
          <Button type="submit">Sign in</Button>
        </div>
      </form>
      .
    </div>
  );
}
export default Login;