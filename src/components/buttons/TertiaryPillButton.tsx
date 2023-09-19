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

function TertiaryPillButton({
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
      className={`inline-flex justify-center items-center gap-x-2 rounded-full bg-purple-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:bg-zinc-600 disabled:hover:bg-zinc-500 disabled:focus-visible:outline-zinc-600 ${short ? '' : 'w-full'}`}
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

export default TertiaryPillButton;
