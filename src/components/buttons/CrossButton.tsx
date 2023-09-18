import React from "react";
import { GoX } from "react-icons/go";

interface Props {
  onClick: () => void;
}
function CrossButton({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex mr-2 p-1 items-center bg-zinc-800 rounded-full text-sm font-semibold text-white shadow-sm opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out"
    >
      <GoX className="h-4 w-4 text-white" aria-hidden="true" />
    </button>
  );
}

export default CrossButton;
