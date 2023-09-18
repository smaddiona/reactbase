import React from "react";

interface TextInputProps {
  value: string;
  name: string;
  id: string;
  placeholder: string;
  label?: string;
  onChange: (value: string) => void;
}

function TextInput({
  value,
  onChange,
  name,
  id,
  placeholder,
  label,
}: TextInputProps) {
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
      <div className="mt-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          name={name}
          id={id}
          className="block w-full rounded-xl border-0 py-1.5 text-black dark:text-white bg-zinc-100 dark:bg-zinc-800 shadow-sm ring-1 ring-inset ring-transparent placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-1 focus:ring-inset focus:ring-transparent sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default TextInput;
