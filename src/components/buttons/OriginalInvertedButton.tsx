import React from "react";
import { PiSpinnerGapThin } from "react-icons/pi";
import LoadingButton from "./LoadingButton";

interface Props {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  IconComponent?: any;
  iconPosition?: "start" | "end";
  isLoading?: boolean;
  short?: boolean;
  type?: "button" | "submit" | "reset";
}

function OriginalInvertedButton({
  label,
  onClick,
  disabled,
  IconComponent,
  iconPosition = "start",
  isLoading = false,
  short = false,
  type = "button",
}: Props) {

  if (isLoading) {
    return (
      <LoadingButton />
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex justify-center items-center gap-x-2 rounded-xl bg-black dark:bg-white px-3.5 py-2.5 text-sm font-semibold border-2 border-white dark:border-white text-black shadow-sm hover:bg-zinc-100 hover:dark:bg-zinc-100  disabled:bg-zinc-600 disabled:hover:bg-zinc-500 disabled:focus-visible:outline-transparent focus-visible:outline-transparent ${short ? '' : 'w-full'} transition-all duration-300 ease-in-out`}
    >
      {IconComponent && iconPosition === "start" && (
        <IconComponent className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
      {label}
      {IconComponent && iconPosition === "end" && (
        <IconComponent className="-mr-0.5 h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}

export default OriginalInvertedButton;
