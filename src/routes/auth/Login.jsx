import React from "react";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { CiLock } from "react-icons/ci";

import IconInput from "../../components/IconInput";
import loginImg from "../../assets/stock/stock1.jpg";
import Google from "../../assets/icons/google.svg?react";
import LinkedIn from "../../assets/icons/linkedin.svg?react";

const Login = () => {
  return (
    <section>
      <div className="container grid-col-two">
        <div className="form">
          <div className="formHead">
            <h1>Welcome Back</h1>
            <p>Please enter your login details below</p>
          </div>
          <div>
            <form action="">
              <label htmlFor="email">Email</label>
              <IconInput
                type={"email"}
                placeholder={"Enter your email adress..."}>
                <IoMail />
              </IconInput>
              <label htmlFor="password">Password</label>
              <IconInput
                type={"password"}
                placeholder={"Enter your password..."}>
                <CiLock />
              </IconInput>
              <div className="login-pref">
                <div>
                  <input type="checkbox" name="checkbox" className="mr-2" />
                  <label htmlFor="checkbox">Remember Me</label>
                </div>
                <p>
                  <Link className="text-primary font-semibold">forgot password?</Link>
                </p>
              </div>
              <button className="btn btn-primary mt-2" type="submit">
                Sign In
              </button>
            </form>
            <div className="other">
              <div className="divider">OR</div>
              {/* Signin Options */}
              <div className="flex justify-between gap-4 mb-2">
                <button className="btn btn-border">
                  <Google className="icon" /> <span>Sign in with Google</span>
                </button>
                <button className="btn btn-border">
                  <LinkedIn className="icon" />{" "}
                  <span>Sign in with LinkedIn</span>
                </button>
              </div>
              <p className="text-center">
                Don't have an account?{" "}
                <span className="text-primary capitalize font-semibold">
                  <Link to="/signup">Sign Up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={loginImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
