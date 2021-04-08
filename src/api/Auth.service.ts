import type { IUser } from "../types";
import { Base } from "./Base.service";

export class Auth extends Base {
    google() {
        window.location.href = `${this.fetcher.apiUrl}/auth/google`;
    }
    user() {
        return this.fetcher.fetch<IUser>('/api/auth/user');
    }
    logout() {
        return this.fetcher.fetch('/api/auth/logout', { method: "GET" });
    }
    updateToken(token: string) {
        this.fetcher.saveToken(token);
    }
    resetToken() {
        this.fetcher.resetToken();
    }
}