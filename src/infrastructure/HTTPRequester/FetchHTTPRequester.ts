import { HTTPRequesterInterface } from "../../domain/HTTPRequester/HTTPRequesterInterface"
export class FetchHTTPRequester implements HTTPRequesterInterface {
    async get(url: string) {
        const response = await fetch(url, {
            method: "GET"
        })
        return await response.json()

    }
}