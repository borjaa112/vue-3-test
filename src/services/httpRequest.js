import axios from "axios"
export const httpRequest = {
    get(url) {
        return axios.get(url)
    }
}