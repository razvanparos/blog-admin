import React, { useState } from "react";
import BlogLogo from "../components/Blog-logo.tsx";
import FormRow from "../components/FormRow.tsx";
import ButtonComponent from "../components/ButtonComponent.tsx";
import LinkComponent from "../components/LinkComponent.tsx";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService.ts";
import Input from "../components/Input.tsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const initialLoginState = {
    loginEmail: "",
    loginPassword: "",
    loginError: "",
    rememberMe: false,
    loading: false,
  };
  const [loginState, setLoginState] = useState(initialLoginState);

  const changeLoginState = (fieldname, value) => {
    setLoginState((prevState) => ({
      ...prevState,
      [fieldname]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    changeLoginState("loading", true);
    try {
      await loginUser(
        loginState.loginEmail,
        loginState.loginPassword,
        loginState.rememberMe
      );
      navigate("/");
    } catch (error) {
      changeLoginState("loginError", error);
    }
    changeLoginState("loading", false);
  };

  return (
    <main className="flex justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col py-6 px-2 gap-y-4 w-full max-w-[500px]"
      >
        <BlogLogo />
        <FormRow>
          <Input
            type="email"
            placeholder={"Email address"}
            value={loginState.loginEmail}
            onChangeFunction={(e) => {
              changeLoginState("loginEmail", e.target.value);
            }}
          />
        </FormRow>
        <FormRow>
          <Input
            type="password"
            placeholder={"Password"}
            value={loginState.loginPassword}
            onChangeFunction={(e) => {
              changeLoginState("loginPassword", e.target.value);
            }}
          />
        </FormRow>
        <div className="flex gap-x-2 items-center">
          <FormRow>
            <Input
              type="checkbox"
              placeholder={"Remember me"}
              value={loginState.rememberMe}
              onChangeFunction={() => {
                changeLoginState("rememberMe", !loginState.rememberMe);
              }}
            />
          </FormRow>
          <p className="w-fit">Remember me</p>
        </div>
        <p className="text-red-500">{loginState.loginError}</p>
        <ButtonComponent
          text={"Login"}
          type="primary"
          loader={loginState.loading}
        />
        <LinkComponent text={"Create new account"} redirectTo={"register"} />
      </form>
    </main>
  );
};

export default LoginPage;
