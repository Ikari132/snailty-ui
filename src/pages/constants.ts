import type { TBrewingMethod } from "./types";

export const BrewingGlasses: TBrewingMethod[] = [
    "gaiwan",
    "teapot",
]

export const CATEGORIES_TRANSLATE = {
    GREEN: "Зеленый",
    RED: "Красный",
    WHITE: "Белый",
    JAPANESE: "Японский",
    SHU: "Шу",
    SHEN: "Шен",
    OOLONG: "Улун",
    OTHERS: "НеЧай",
    MATE: "Мате",
    BLACK: "Черный",
}
export const CATEGORIES_MAP = {
    GREEN: "GREEN",
    RED: "RED",
    WHITE: "WHITE",
    JAPANESE: "JAPANESE",
    SHU: "SHU",
    SHEN: "SHEN",
    OOLONG: "OOLONG",
    OTHERS: "OTHERS",
    MATE: "MATE",
    BLACK: "BLACK",
}

export const CATEGORIES_COLOR = {
    [CATEGORIES_MAP.GREEN]: "#009245",
    [CATEGORIES_MAP.RED]: "#e0421b",
    [CATEGORIES_MAP.WHITE]: "#cccccc",
    [CATEGORIES_MAP.JAPANESE]: "#709200",
    [CATEGORIES_MAP.SHU]: "#925c00",
    [CATEGORIES_MAP.SHEN]: "#436b26",
    [CATEGORIES_MAP.OOLONG]: "#00b3ad",
    [CATEGORIES_MAP.OTHERS]: "#80559c",
    [CATEGORIES_MAP.MATE]: "#93e22b",
    [CATEGORIES_MAP.BLACK]: "#131313",
}
export const CATEGORIES_BREW_TIME = {
    [CATEGORIES_MAP.GREEN]: 15,
    [CATEGORIES_MAP.RED]: 30,
    [CATEGORIES_MAP.WHITE]: 20,
    [CATEGORIES_MAP.JAPANESE]: 15,
    [CATEGORIES_MAP.SHU]: 30,
    [CATEGORIES_MAP.SHEN]: 3,
    [CATEGORIES_MAP.OOLONG]: 20,
    [CATEGORIES_MAP.OTHERS]: 60,
    [CATEGORIES_MAP.MATE]: 60,
    [CATEGORIES_MAP.BLACK]: 40,
}
