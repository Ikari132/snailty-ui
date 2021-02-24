export type TBrewingMethod = "gaiwan" | "teapot";

export interface ITea {
    type: ITeaType;
    name: string;
    otherName?: string;
    time: number;
    temperature: number;
    method: TBrewingMethod[];
    description: string;
    price: string;
    tags: string[];
    inStock: boolean;
    count?: number;
    rating?: number;
    tasteProfile?: ITasteProfile[];
}
// [todo] make type more friendly for beginners
export type TProfile =
    "earth"
    | "wood"
    | "smoke"
    | "nuts"
    | "spice"
    | "fruit"
    | "milk"
    | "sweet"
    | "flower"
    | "vegetable"
    | "grass"
    | "mineral"
    | "sour";

export interface ITasteProfile {
    type: TProfile;
}
export type ITeaType =
    "GREEN" |
    "RED" |
    "WHITE" |
    "JAPANESE" |
    "SHU" |
    "SHEN" |
    "OOLONG" |
    "OTHERS" |
    "MATE" |
    "BLACK";

export interface ITeaGroup {
    type: ITeaType;
    list: ITea[];
}