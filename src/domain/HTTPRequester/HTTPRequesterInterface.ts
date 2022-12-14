export interface HTTPRequesterInterface {
    get(url: string): Promise<any>
}