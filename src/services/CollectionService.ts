import PBService from "./PBService";

const CollectionService = {
    getCollections: async () => {
        return await PBService.getPB().collections.getFullList({sort: 'type,name', $autoCancel: false});
    },

    getSchema: async (id: string) => {
        return await PBService.getPB().collections.getOne(id, {$autoCancel: false});
    },

    getCollectionData: async (id: string, field: string, direction: string, searchTerm: string) => {
        let sortBuilder = '';
        
        if(direction === "desc") {
            sortBuilder = '-';
            sortBuilder += field;
        }

        if(direction === "asc") {
            sortBuilder = field;
        }

        return await PBService.getPB().collection(id).getList(1, 200, {sort: sortBuilder, filter: searchTerm, $autoCancel: false});
    }
};

export default CollectionService;