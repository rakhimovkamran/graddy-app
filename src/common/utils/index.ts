import { IGradient, TColor } from "common/interfaces"

export const createColorStop = (colorStop: TColor) =>
    ` ${colorStop[0].toUpperCase()} ${colorStop[1]}%`

export const reduceColorStops = (colorStops: TColor[]) => {
    return colorStops.map((colorStop) => createColorStop(colorStop)).join(", ")
}

export const generateGradient = (data: IGradient) => {
    return `linear-gradient(${data.angle}deg, ${reduceColorStops(data.colors)})`
}
