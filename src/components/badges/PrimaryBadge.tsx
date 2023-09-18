import React from "react";

interface Props {
  label: string;
}

function PrimaryBadge({ label }: Props) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">
      {label}
    </span>
  );
}

export default PrimaryBadge;
