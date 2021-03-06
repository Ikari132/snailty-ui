export interface IUser {
    id?: number;
    googleId: string;
    email: string;
    firstName: string;
    lastName: string;
    picture: string;
    needOnboarding: boolean;
}