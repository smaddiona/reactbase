import PBService from "./PBService";

const SettingsService = {
    getSettings: async () => {
        return await PBService.getPB().settings.getAll();
    },

    updateSettings: async (settings: any) => {
        return await PBService.getPB().settings.update(settings);
    },
};

export default SettingsService;