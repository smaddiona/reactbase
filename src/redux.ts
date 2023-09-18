import { atom, useAtom } from "jotai";

const globalRefreshAtom = atom(false);

export const useGlobalRefresh = () => {
  const [globalRefresh, setGlobalRefresh] = useAtom(globalRefreshAtom);
  return [globalRefresh, setGlobalRefresh] as const;
};
