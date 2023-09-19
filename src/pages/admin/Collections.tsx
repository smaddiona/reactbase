import React, { Fragment, useEffect, useState } from "react";
import { useGlobalRefresh, useSelectedCollection } from "../../redux";
import CollectionService from "../../services/CollectionService";
import toast from "react-hot-toast";
import CollectionDataTable from "../../components/tables/CollectionDataTable";
import { AiOutlineReload } from "react-icons/ai";
import OriginalInvertedButton from "../../components/buttons/OriginalInvertedButton";
import OriginalButton from "../../components/buttons/OriginalButton";
import { GoPlus } from "react-icons/go";
import { BsCodeSlash } from "react-icons/bs";
import FilterInput from "../../components/inputs/FilterInput";

function Collections() {
  const [selectedCollection, setSelectedCollection] = useSelectedCollection();
  const [globalRefresh, setGlobalRefresh] = useGlobalRefresh();
  const [schema, setSchema] = useState<any>();
  const [infos, setInfos] = useState<any>();
  const [data, setData] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState({ field: "created", order: "desc" });

  const init = (val?: string) => {
    CollectionService.getSchema(selectedCollection)
      .then((res) => {
        setInfos(res);
        setSchema(res.schema);
      })
      .catch((err) => {
        toast.error(err.message);
      });

    CollectionService.getCollectionData(selectedCollection, orderBy.field, orderBy.order, val || searchTerm)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    init();
  }, [selectedCollection, orderBy]);

  useEffect(() => {
    if (globalRefresh) {
      init();
      setGlobalRefresh(false);
    }
  }, [globalRefresh]);

  return (
    <Fragment>
      {schema && infos && data ? (
        <Fragment>
          <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-black dark:text-white inline-flex gap-2">
                <span className="opacity-50">Collections / </span>
                {infos.name}
                {globalRefresh && (
                  <span>
                    <AiOutlineReload className="w-5 h-5 animate-spin" />
                  </span>
                )}
              </h1>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 flex flex-row">
              <OriginalInvertedButton
                label="Api preview"
                iconPosition="start"
                IconComponent={BsCodeSlash}
                short={true}
                onClick={() => {}}
              />
              <div className="mx-1"></div>
              <OriginalButton
                label="Add record"
                iconPosition="start"
                IconComponent={GoPlus}
                short={true}
                onClick={() => {}}
              />
            </div>
          </div>
          <div className="mt-8">
            <FilterInput onSearch={(val) => {setSearchTerm(val); init(val)}} />
          </div>
          </div>
          <CollectionDataTable schema={schema} infos={infos} data={data} filter={orderBy} />
        </Fragment>
      ) : (
        "Loading..."
      )}
    </Fragment>
  );
}

export default Collections;
