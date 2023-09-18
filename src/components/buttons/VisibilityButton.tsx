import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface Props {
  value: boolean;
  onClick: () => void;
}
function VisibilityButton({ value, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-x-2 px-3 bg-zinc-800 rounded-xl text-sm font-semibold text-white shadow-sm opacity-20 hover:opacity-100 transition-all duration-200 ease-in-out"
    >
      {value ? (
        <AiFillEye className="-mr-0.5 h-4 w-4 text-white" aria-hidden="true" />
      ) : (
        <AiFillEyeInvisible
          className="-mr-0.5 h-4 w-4 text-white"
          aria-hidden="true"
        />
      )}
    </button>
  );
}

export default VisibilityButton;
