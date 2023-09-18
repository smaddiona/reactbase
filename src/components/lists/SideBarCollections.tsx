import React, { useEffect, useState } from "react";
import CollectionService from "../../services/CollectionService";
import { useGlobalRefresh, useSelectedCollection } from "../../redux";
import toast from "react-hot-toast";
import TextInput from "../inputs/TextInput";
import { COLLECTION_TYPES } from "../../models/CollectionType";
import SecondaryBadge from "../badges/SecondaryBadge";
import NormalBadge from "../badges/NormalBadge";
import { IoMdFolder } from "react-icons/io";
import { GoPeople, GoPlus } from "react-icons/go";
import OriginalButton from "../buttons/OriginalButton";

function SideBarCollections() {
  const [globalRefresh, setGlobalRefresh] = useGlobalRefresh();
  const [selectedCollection, setSelectedCollection] = useSelectedCollection();
  const [collections, setCollections] = useState<any>([]);
  const [filteredCollections, setFilteredCollections] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const init = () => {
    CollectionService.getCollections()
      .then((res) => {
        setCollections(res);
        setFilteredCollections(res);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (globalRefresh) {
      init();
      setGlobalRefresh(false);
    }
  }, [globalRefresh]);

  useEffect(() => {
    filterCollections();
  }, [searchTerm, collections]);

  const filterCollections = () => {
    if (searchTerm === "") {
      setFilteredCollections(collections);
    } else {
      setFilteredCollections(
        collections.filter((collection: any) =>
          collection.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="flex flex-col w-full h-[100dvh] bg-white dark:bg-black">
      <div className="font-mono border-b border-zinc-800">
        <TextInput
          background={false}
          id="searchTerm"
          name="searchTerm"
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search collections"
          hasCancel={true}
        />
      </div>
      <div className="h-full p-2 flex flex-col gap-2">
        {filterCollections.length === 0 ? (
          filteredCollections.map((collection: any) => (
            <div
              onClick={() => {
                setSelectedCollection(collection.id);
              }}
              className="flex flex-row justify-between items-center px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 hover:dark:bg-zinc-800 text-black dark:text-white"
            >
              {collection.type === COLLECTION_TYPES.AUTH && (
                <GoPeople className="-ml-0.5 w-5 h-5" />
              )}
              {collection.type === COLLECTION_TYPES.BASE && (
                <IoMdFolder className="-ml-0.5 w-5 h-5 " />
              )}
              <p className="text-black dark:text-white font-mono">
                {collection.name}
              </p>
              {collection.type === COLLECTION_TYPES.AUTH && (
                <SecondaryBadge label="Auth" />
              )}
              {collection.type === COLLECTION_TYPES.BASE && (
                <NormalBadge label="Base" />
              )}
            </div>
          ))
        ) : (
          <div className="flex flex-row w-full font-mono text-black dark:text-white p-4">
            <p>No collections found</p>
          </div>
        )}
        <OriginalButton
          iconPosition="start"
          IconComponent={GoPlus}
          label="Create Collection"
          onClick={() => {
            toast("I will create a collection");
          }}
        />
      </div>
    </div>
  );
}

export default SideBarCollections;
