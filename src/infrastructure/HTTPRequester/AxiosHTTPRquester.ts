import axios from "axios"
import { HTTPRequesterInterface } from "../../domain/HTTPRequester/HTTPRequesterInterface"

export class AxiosHTTPRquester implements HTTPRequesterInterface {
    async get(url: string) {
        return axios.get(url).then((response) => response.data)
    }
}