import React from "react";

interface Props {
  label: string;
}

function WarningBadge({ label }: Props) {
  return (
    <span className="inline-flex items-center rounded-full bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-400/20">
      {label}
    </span>
  );
}

export default WarningBadge;
