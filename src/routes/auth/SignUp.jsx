import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { IoMail } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import IconInput from "../../components/IconInput";

import signupImg from "../../assets/stock/stock2.jpg";
import { LiaUser } from "react-icons/lia";
import Google from "../../assets/icons/google.svg?react";
import LinkedIn from "../../assets/icons/linkedin.svg?react";
import { schema } from "./schema";

const SignUp = () => {
  const signupSchema = schema.pick({
    fullname: true,
    email: true,
    password: true,
    terms: true,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { fullname: "", email: "", password: "", terms: false },
    resolver: zodResolver(signupSchema),
  });

  // submit form
  const onSubmit = (data) => console.log(data);
  // Debug form error
  const onError = (errors) => console.log(errors);
  return (
    <section>
      <div className="container grid-col-two">
        <div className="form">
          <div className="formHead">
            <h1>Create your account</h1>
            <p>We suggest you use your most active Email address</p>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
            <label htmlFor="fullname">Full Name</label>
            <IconInput
              register={register}
              name="fullname"
              error={errors.fullname}
              type="text"
              placeholder="Full Name...">
              <LiaUser />
            </IconInput>
            <label htmlFor="email">Email</label>
            <IconInput
              register={register}
              name="email"
              error={errors.email}
              type="email"
              placeholder="Email...">
              <IoMail />
            </IconInput>
            <label htmlFor="password">Password</label>
            <IconInput
              register={register}
              name="password"
              error={errors.password}
              type={"password"}
              placeholder={"Password..."}>
              <CiLock />
            </IconInput>
            <div className="login-pref">
              <div>
                <input
                  type="checkbox"
                  {...register("terms")}
                  name="terms"
                  id="terms"
                  className="mr-2"
                />
                <label htmlFor="terms">
                  I agree to all terms, privacy policy and fees
                </label>
                {errors.terms && (
                  <span className="errorText block">
                    {errors.terms.message}
                  </span>
                )}
              </div>
            </div>
            <button className="btn btn-primary mt-2" type="submit">
              Sign Up
            </button>
          </form>
          <div className="other">
            <div className="divider">OR</div>
            {/* Other Login Options */}
            <div className="flex justify-between gap-4 mb-2">
              <button className="btn btn-border">
                <Google className="icon" /> <span>Sign up with Google</span>
              </button>
              <button className="btn btn-border">
                <LinkedIn className="icon" /> <span>Sign up with LinkedIn</span>
              </button>
            </div>
            <p className="text-center">
              Already have an account?{" "}
              <span className="text-primary capitalize font-semibold">
                <Link to="/signin">Sign In</Link>
              </span>
            </p>
          </div>
        </div>
        <div className="image">
          <img src={signupImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
