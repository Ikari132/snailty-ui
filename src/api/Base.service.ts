import type { Fetcher } from "./Fetcher";

export class Base {
    public token: string;
    fetcher: Fetcher;
    constructor(fetcher: Fetcher) {
        this.fetcher = fetcher;
    }
}