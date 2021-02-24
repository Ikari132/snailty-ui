import { Auth } from "./Auth.service";
import { Fetcher } from "./Fetcher";

const fetcher = new Fetcher();
export const services = {
    auth: new Auth(fetcher),
}