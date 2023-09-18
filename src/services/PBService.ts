import Pocketbase from 'pocketbase';
import ConfigUtil from '../utils/ConfigUtil';

const pb = new Pocketbase(ConfigUtil.getUrl());

const PBService = {
    login: async (email: string, password: string) => {
        await pb.admins.authWithPassword(email, password);
    },

    logout: () => {
        pb.authStore.clear();
    },

    getUserData: () => {
        return pb.authStore.model;
    },

    checkSession: () => {
        return pb.authStore.isValid;
    },

    getToken: () => {
        return pb.authStore.token;
    },

    getPB: () => {
        return pb;
    }
};

export default PBService;