export interface HandlerInterface {
    handle(query: any): Promise<any>;
}