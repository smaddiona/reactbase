import React, { FormEvent, useState } from "react";
import InstallService from "../../services/InstallService";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/inputs/TextInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import toast from "react-hot-toast";
import SecondaryButton from "../../components/buttons/SecondaryButton";

function Installer() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInstall = (e: FormEvent) => {
    e.preventDefault();

    if (username === "" || password === "" || confirmPassword === "") {
      toast.error("Fill all the necessary infos");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    //check if email is valid
    if (!Validators.email(username)) {
      toast.error("Invalid email");
      return;
    }

    InstallService.install({ email: username, password, passwordConfirm: confirmPassword }).then(
      (res) => {
        navigate("/login");
      }
    ).catch((err) => {
      toast.error(err.response.data.message)
    });
  };

  const validateEmail = (email: string) => {
    // eslint-disable-next-line no-useless-escape
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="max-w-xl w-full flex flex-col justify-center items-center rounded-xl p-4 bg-zinc-100 dark:bg-zinc-900 border-zinc-500">
      <div className="my-4">
        <h1 className="font-bold tracking-tight leading-6 text-black dark:text-white text-3xl">
          Installer
        </h1>
      </div>
      <form onSubmit={(e) => {handleInstall(e)}}  className="mb-2 w-full">
        <TextInput
          name="username"
          id="username"
          placeholder="Email"
          value={username}
          onChange={setUsername}
        />
        <PasswordInput
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
        <PasswordInput
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
        <div className="flex flex-row mt-2">
          <PrimaryButton
            label="Install"
            type="submit"
            onClick={() => {}}
          />
        </div>
      </form>
      <SecondaryButton
        label="Registered? go to login"
        onClick={() => {
          navigate("/login");
        }}
      />
    </div>
  );
}

export default Installer;
