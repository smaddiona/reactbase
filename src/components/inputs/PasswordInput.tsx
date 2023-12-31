import React, { useState } from "react";
import VisibilityButton from "../buttons/VisibilityButton";

interface TextInputProps {
  value: string;
  name: string;
  id: string;
  placeholder: string;
  label?: string;
  onChange: (value: string) => void;
}

function PasswordInput({
  value,
  onChange,
  name,
  id,
  placeholder,
  label,
}: TextInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2 inline-flex gap-2 w-full">
        <input
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          name={name}
          id={id}
          className="block w-full rounded-xl border-0 py-1.5 text-black dark:text-white bg-zinc-100 dark:bg-zinc-800 shadow-sm ring-1 ring-inset ring-transparent placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-1 focus:ring-inset focus:ring-transparent sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
        <VisibilityButton
          value={visible}
          onClick={() => {
            setVisible(!visible);
          }}
        />
      </div>
    </div>
  );
}

export default PasswordInput;
