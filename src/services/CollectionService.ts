import PBService from "./PBService";

const CollectionService = {
    getCollections: async () => {
        return await PBService.getPB().collections.getFullList({sort: 'type,name', $autoCancel: false});
    },

    getSchema: async (id: string) => {
        return await PBService.getPB().collections.getOne(id, {$autoCancel: false});
    },

    getCollectionData: async (id: string) => {
        return await PBService.getPB().collection(id).getList(1, 200, {sort: '-created', $autoCancel: false});
    }
};

export default CollectionService;