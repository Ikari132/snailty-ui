import { writable } from 'svelte/store';
import type { IUser } from '../types';

function createAuthStore() {
    const store = writable<IUser>(null);
    const { subscribe, set, update } = store;

    return {
        subscribe,
        update,
        set,
        logout: () => set(null),
    };
}

export const authStore = createAuthStore();