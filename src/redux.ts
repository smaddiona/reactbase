import { atom, useAtom } from "jotai";

const globalRefreshAtom = atom(false);

export const useGlobalRefresh = () => {
  const [globalRefresh, setGlobalRefresh] = useAtom(globalRefreshAtom);
  return [globalRefresh, setGlobalRefresh] as const;
};

const selectedCollectionAtom = atom<string>("_pb_users_auth_");

export const useSelectedCollection = () => {
  const [selectedCollection, setSelectedCollection] = useAtom(
    selectedCollectionAtom
  );
  return [selectedCollection, setSelectedCollection] as const;
};
