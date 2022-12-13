import axios from "axios"
export const httpRequest = {
    get(url) {
        return axios.get(url).then((data) => data.data)
    },
    async getByFetch(url) {
        const response = await fetch(url, {
            method: "GET"
        })

        return await response.json()

    }
}