import React from "react";
import CrossButton from "../buttons/CrossButton";

interface TextInputProps {
  value: number;
  name: string;
  id: string;
  placeholder: string;
  label?: string;
  onChange: (value: number) => void;
  background?: boolean;
}

function NumberInput({
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
      <div className="mt-2 flex flex-row justify-between gap-1 items-center">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          name={name}
          id={id}
          min={0}
          className={`block w-full rounded-xl border-0 py-1.5 text-black dark:text-white shadow-sm ring-1 ring-inset ring-transparent placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-1 focus:ring-inset focus:ring-transparent sm:text-sm sm:leading-6 ${
            background ? "bg-zinc-100 dark:bg-zinc-800" : "bg-transparent"
          }`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default NumberInput;
