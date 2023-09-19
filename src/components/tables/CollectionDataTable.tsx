import React, { useCallback } from "react";
import { MdKey } from "react-icons/md";
import { RxText } from "react-icons/rx";
import {
  AiOutlineFile,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import NormalBadge from "../badges/NormalBadge";
import { useGlobalRefresh } from "../../redux";

interface Props {
  schema: any;
  infos: any;
  data: any;
  filter: any;
  changeFilter?: (value: any) => void;
}

function CollectionDataTable({ schema, infos, data }: Props) {
  const [globalRefresh, setGlobalRefresh] = useGlobalRefresh();
  

  const renderHeadCell = useCallback((field: any, type: any) => {
    switch (type) {
      case "pk":
        return (
          <div className="flex flex-row justify-start gap-1 items-center">
            <MdKey className="w-5 h-5" />
            {field}
          </div>
        );
      case "text":
        return (
          <div className="flex flex-row justify-start gap-1 items-center">
            <RxText className="w-5 h-5" /> {field}
          </div>
        );
      case "file":
        return (
          <div className="flex flex-row justify-start gap-1 items-center">
            <AiOutlineFile className="w-5 h-5" /> {field}
          </div>
        );
      case "date":
        return (
          <div className="flex flex-row justify-start gap-1 items-center">
            <AiOutlineCalendar className="w-5 h-5" /> {field}
          </div>
        );
      case "edit":
        return (
          <div className="flex flex-row justify-start gap-1 items-center">
            <BiDotsHorizontalRounded className="w-5 h-5" />
          </div>
        );
      default:
        return field;
    }
  }, []);

  const renderCell = useCallback((field: any, type: any) => {
    switch (type) {
      case "pk":
        return (
          <td className="flex flex-row justify-start gap-1 items-center">
            <NormalBadge label={field} />
          </td>
        );
      case "text":
        return (
          <td className="flex flex-row justify-start gap-1 items-center">
            {field}
          </td>
        );
      case "file":
        return (
          <td className="flex flex-row justify-start gap-1 items-center">
            <AiOutlineFile className="w-5 h-5" />
          </td>
        );
      case "date":
        return (
          <td className="flex flex-row justify-start gap-1 items-center">
            {field}
          </td>
        );
      case "edit":
        return (
          <td className="flex flex-row justify-start gap-1 items-center">
            <BsArrowRightShort className="w-7 h-7" />
          </td>
        );
      default:
        return field;
    }
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-zinc-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className={`whitespace-nowrap py-3.5 text-left text-sm font-semibold text-black dark:text-white`}
                  >
                    {renderHeadCell("id", "pk")}
                  </th>
                  {schema.map((field: any, index: number) => (
                    <th
                      scope="col"
                      className={`whitespace-nowrap py-3.5 text-left text-sm font-semibold text-black dark:text-white ${
                        index === 0 ? "sm:pl-0" : ""
                      }`}
                    >
                      {renderHeadCell(field.name, field.type)}
                    </th>
                  ))}
                  <th
                    scope="col"
                    className={`whitespace-nowrap py-3.5 text-left text-sm font-semibold text-black dark:text-white`}
                  >
                    {renderHeadCell("created", "date")}
                  </th>
                  <th
                    scope="col"
                    className={`whitespace-nowrap py-3.5 text-left text-sm font-semibold text-black dark:text-white`}
                  >
                    {renderHeadCell("updated", "date")}
                  </th>
                  <th
                    scope="col"
                    className="relative whitespace-nowrap py-3.5 sm:pr-0 text-black dark:text-white"
                  >
                    {renderHeadCell("edit", "edit")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white dark:bg-black text-black dark:text-white">
                {data &&
                  data.items &&
                  data.items.map((record: any) => (
                    <tr
                      className="bg-transparent hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 ease-in-out px-2"
                      key={record.id}
                    >
                      <td className="whitespace-nowrap py-2 text-sm text-zinc-800 dark:text-zinc-300 sm:pl-0">
                        {renderCell(record.id, "pk")}
                      </td>
                      {schema.map((key: any) => (
                        <td className="whitespace-nowrap py-2 text-sm text-zinc-800 dark:text-zinc-300 sm:pl-0">
                          {renderCell(record[key.name], key.type)}
                        </td>
                      ))}
                      <td className="whitespace-nowrap py-2 text-sm text-zinc-800 dark:text-zinc-300 sm:pl-0">
                        {renderCell(record.created, "date")}
                      </td>
                      <td className="whitespace-nowrap py-2 text-sm text-zinc-800 dark:text-zinc-300 sm:pl-0">
                        {renderCell(record.updated, "date")}
                      </td>
                      <td className="whitespace-nowrap py-2 text-sm text-zinc-800 dark:text-zinc-300 sm:pl-0">
                        {renderCell("edit", "edit")}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionDataTable;
