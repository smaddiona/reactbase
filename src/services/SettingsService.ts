import PBService from "./PBService";

const SettingsService = {
    getSettings: async () => {
        return await PBService.getPB().settings.getAll();
    },
};

export default SettingsService;