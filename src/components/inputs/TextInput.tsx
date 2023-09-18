import React from "react";

interface TextInputProps {
  value: string;
  name: string;
  id: string;
  placeholder: string;
  label?: string;
  onChange: (value: string) => void;
  background?: boolean;
}

function TextInput({
  value,
  onChange,
  name,
  id,
  placeholder,
  label,
  background = true,
}: TextInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-black dark:text-white"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          name={name}
          id={id}
          className={`block w-full rounded-xl border-0 py-1.5 text-black dark:text-white shadow-sm ring-1 ring-inset ring-transparent placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-1 focus:ring-inset focus:ring-transparent sm:text-sm sm:leading-6 ${background ? "bg-zinc-100 dark:bg-zinc-800" : "bg-transparent"}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default TextInput;
