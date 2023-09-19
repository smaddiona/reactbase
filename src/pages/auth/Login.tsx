import React, { FormEvent, Fragment, useEffect, useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import PBService from "../../services/PBService";
import TextInput from "../../components/inputs/TextInput";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import PasswordInput from "../../components/inputs/PasswordInput";
import Validators from "../../utils/Validators";
import toast from "react-hot-toast";
import ConfigUtil from "../../utils/ConfigUtil";
import Configs from "./Configs";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [configs, setConfigs] = useState<any>();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
    }

    if (!Validators.email(email)) {
      toast.error("Invalid email");
      return;
    }

    try {
      await PBService.login(email, password);
      navigate("/admin/collections");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const res = ConfigUtil.get();
    setConfigs(res);
  }, []);

  return (
    <div className="max-w-xl w-full flex flex-col justify-center items-center rounded-xl p-4 bg-zinc-100 dark:bg-zinc-900 border-zinc-500">
      {configs && configs.url !== "" ? (
        <Fragment>
          <div className="my-4 w-full">
            <h1 className="font-bold tracking-tight leading-6 text-black dark:text-white text-3xl">
              Login _
            </h1>
            <form
              onSubmit={(e) => {
                handleLogin(e);
              }}
              className="w-full mt-2 flex flex-col"
            >
              <TextInput
                name="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(value) => {
                  setEmail(value);
                }}
              />
              <PasswordInput
                value={password}
                onChange={setPassword}
                placeholder="Password"
                id="password"
                name="password"
              />
              <div className="mt-2">
                <PrimaryButton label="Login" type="submit" onClick={() => {}} />
              </div>
            </form>
          </div>
          <SecondaryButton
            label="First load? Go to setup"
            onClick={() => {
              navigate("/installer");
            }}
          />
        </Fragment>
      ) : (
        <Configs />
      )}
    </div>
  );
}

export default Login;
