export enum deviceRatio {
    IPhone = "0.46",
    IPhoneButton = "0.56",
    IPad = "1.33",
    IPadPortrait = "0.75",
}
export function getDeviceRatio(): string {
    const screen = window.screen;
    const ratio = screen.width / screen.height;
    return ratio.toFixed(2);
}

export type TDeviceType = "IPhone" | "IPhoneButton" | "IPad" | "unknown";
export function getDeviceType(): TDeviceType {
    const screen = window.screen;
    const ratio = getDeviceRatio();

    if (screen.width > 760 && (ratio === deviceRatio.IPad || ratio === deviceRatio.IPadPortrait)) {
        return "IPad";
    }
    if (ratio === deviceRatio.IPhone) {
        return "IPhone";
    }
    if (ratio === deviceRatio.IPhoneButton) {
        return "IPhoneButton";
    }
    return "unknown";
}