import { HandlerInterface } from "../domain/HTTPRequester/HandlerInterface";
import { GetCharacterQuery } from "./GetCharacterQuery";
import { HTTPRequesterInterface } from "../domain/HTTPRequester/HTTPRequesterInterface";
import { AxiosHTTPRquester } from "../infrastructure/HTTPRequester/AxiosHTTPRquester";

export class GetCharactersHandler implements HandlerInterface {
    constructor(private readonly httpRequester: HTTPRequesterInterface) {
        //
    }
    handle(query: GetCharacterQuery): Promise<any> {
        return this.httpRequester.get(query.url)
    }
}