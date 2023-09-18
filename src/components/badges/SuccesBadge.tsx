import React from "react";

interface Props {
  label: string;
}

function SuccesBadge({ label }: Props) {
  return (
    <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
      {label}
    </span>
  );
}

export default SuccesBadge;
