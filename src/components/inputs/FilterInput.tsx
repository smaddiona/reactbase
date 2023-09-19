import React, { useState } from "react";
import CrossButton from "../buttons/CrossButton";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import TertiaryPillButton from "../buttons/TertiaryPillButton";
import SecondaryPillButton from "../buttons/SecondaryPillButton";

interface TextInputProps {
  label?: string;
  onSearch: (value: string) => void;
}

function FilterInput({  onSearch }: TextInputProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div className="w-full">
      <div className="mt-2 flex flex-row justify-between gap-1 items-center bg-zinc-100 dark:bg-zinc-800 rounded-full">
        <div className="inline-flex items-center px-2 w-full">
          <MagnifyingGlassIcon className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            name="collection-filter"
            id="collection-filter"
            className={`block w-full rounded-full font-mono border-0 py-1.5 text-black dark:text-white shadow-sm ring-1 ring-inset ring-transparent placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-1 focus:ring-inset focus:ring-transparent sm:text-sm sm:leading-6 bg-zinc-100 dark:bg-zinc-800`}
            placeholder={'Search term or filter like created > "2023-01-01"...'}
          />
        </div>
        <div
          className={`${
            searchTerm !== "" ? "opacity-100" : "opacity-0"
          } transition-all duration-300 ease-in-out mr-2 inline-flex items-center gap-1`}
        >
          <TertiaryPillButton label="Search" onClick={() => onSearch(searchTerm)} />
          <SecondaryPillButton label="Clear" onClick={() => {setSearchTerm(""); onSearch("")}} />
        </div>
      </div>
    </div>
  );
}

export default FilterInput;
