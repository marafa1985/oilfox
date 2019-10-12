export interface Metering {
    id: string,
    hwid: string,
    value: number,
    battery: number
}
export interface Device {
    id: string,
    metering: Metering
}