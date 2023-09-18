import React, { useState } from "react";
import InstallService from "../../services/InstallService";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/inputs/TextInput";
import PasswordInput from "../../components/inputs/PasswordInput";

function Installer() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="max-w-xl w-full flex flex-col justify-center items-center rounded-xl p-4 bg-zinc-100 dark:bg-zinc-900 border-zinc-500">
      <div className="my-4">
        <h1 className="font-bold tracking-tight leading-6 text-black dark:text-white text-3xl">
          Installer
        </h1>
      </div>
      <div className="mb-2 w-full">
        <TextInput name="username" id="username" placeholder="Username" value={username} onChange={setUsername} />
        <PasswordInput name="password" id="password" placeholder="Password" value={password} onChange={setPassword} />
        <PasswordInput name="confirm_password" id="confirm_password" placeholder="Confirm Password" value={confirmPassword} onChange={setConfirmPassword} />
      </div>
      <PrimaryButton
        label="Registered? go to login"
        onClick={() => {
          navigate("/login");
        }}
      />
    </div>
  );
}

export default Installer;
