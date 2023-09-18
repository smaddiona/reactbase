import axios from "axios"
import ConfigUtil from "../utils/ConfigUtil"

const InstallService = {
    async testUrl(url: string) {
        const res = await axios.get(`${url}/api/health`)
        return res.status === 200
    },

    install(data: any) {
        axios.post(`${ConfigUtil.getUrl()}/api/admins`, data)
    }
}

export default InstallService