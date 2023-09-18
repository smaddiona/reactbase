import PBService from "./PBService";

const CollectionService = {
    getCollections: async () => {
        return await PBService.getPB().collections.getFullList({sort: 'type,name', $autoCancel: false});
    },
};

export default CollectionService;