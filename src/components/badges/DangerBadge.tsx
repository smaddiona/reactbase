import React from "react";

interface Props {
  label: string;
}

function DangerBadge({ label }: Props) {
  return (
    <span className="inline-flex items-center rounded-full bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">
      {label}
    </span>
  );
}

export default DangerBadge;
