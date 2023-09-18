import React from "react";

interface Props {
  label: string;
}

function SecondaryBadge({label}: Props) {
  return (
    <span className="inline-flex items-center rounded-full bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-400/30">
      {label}
    </span>
  );
}

export default SecondaryBadge;
