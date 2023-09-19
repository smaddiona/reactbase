const ConfigUtil = {
    get: () => {
        let confs = localStorage.getItem('pb_config');

        if(!confs) {
            ConfigUtil.set({ url: ""});
            return JSON.stringify({url: ""});
        }
        return JSON.parse(localStorage.getItem('pb_config')!);
    },

    getToken: () => {
        return ConfigUtil.get().token;
    },

    getUrl: () => {
        return ConfigUtil.get().url;
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