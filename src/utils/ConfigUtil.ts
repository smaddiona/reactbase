const ConfigUtil = {
    get: () => {
        return JSON.parse(localStorage.getItem('pb_config')!) || {};
    },

    getToken: () => {
        return JSON.parse(localStorage.getItem('pb_config')!).token || "";
    },

    getUrl: () => {
        return JSON.parse(localStorage.getItem('pb_config')!).url || "";
    },

    set: (config: any) => {
        localStorage.setItem('pb_config', JSON.stringify(config));
    },

    setToken: (token: string) => {
        const config = ConfigUtil.get();
        config.token = token;
        ConfigUtil.set(config);
    },

    setUrl: (url: string) => {
        const config = ConfigUtil.get();
        config.url = url;
        ConfigUtil.set(config);
    },
};

export default ConfigUtil;