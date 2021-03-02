export class Fetcher {
    token: string;
    constructor() {
        console.log("fetcher", this.getToken())
        this.token = this.getToken();
    }

    async fetch<I>(url: string, options: RequestInit = {}): Promise<{ data: I, res: Response }> {
        console.log("fetcher token", this.token)
        console.log(this)
        if (this.token) {
            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${this.token}`
            }
        }

        return new Promise(async (done, rej) => {
            const res = await fetch(url, options);

            if (res.ok) {
                const data: I = await res.json();
                done({ data, res })
            } else {
                rej(res)
            }
        })
    }

    saveToken(token: string) {
        console.log("fetcher:update token", token)
        localStorage.setItem("jwtToken", token);
        this.token = token;
    }
    resetToken() {
        localStorage.removeItem("jwtToken");
        this.token = null;
    }
    getToken() {
        return localStorage.getItem("jwtToken") || null;
    }
}