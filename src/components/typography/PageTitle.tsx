import React from "react";

interface Props {
  parent: string;
  name: string;
}

function PageTitle({ parent, name }: Props) {
  return (
    <div className="sm:flex-auto mb-4">
      <h1 className="text-base font-semibold leading-6 text-black dark:text-white inline-flex gap-2">
        <span className="opacity-50">{parent} / </span>
        {name}
      </h1>
    </div>
  );
}

export default PageTitle;
