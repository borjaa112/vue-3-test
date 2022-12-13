import axios from "axios"
export const httpRequest = {
    async get(url) {
        return axios.get(url).then((response) => response.data)
    },
    async getByFetch(url) {
        const response = await fetch(url, {
            method: "GET"
        })

        return await response.json()

    }
}