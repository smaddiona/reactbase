import React from "react";

interface Props {
  label: string;
}

function NormalBadge({ label }: Props) {
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-400/10 px-2 py-1 text-xs font-medium text-zinc-400 ring-1 ring-inset ring-zinc-400/30">
      {label}
    </span>
  );
}

export default NormalBadge;
