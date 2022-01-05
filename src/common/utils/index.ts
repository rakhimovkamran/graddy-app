import { IGradient, TColor } from "common/interfaces"
import { toast } from "react-toastify"

export const createColorStop = (colorStop: TColor) =>
    ` ${colorStop[0].toUpperCase()} ${colorStop[1]}%`

export const reduceColorStops = (colorStops: TColor[]) =>
    colorStops.map(createColorStop).join(", ")

export const generateGradient = (data: IGradient) => {
    return `linear-gradient(${data.angle}deg, ${reduceColorStops(data.colors)})`
}

export const handleCopyToClipboard = async (
    data: string,
    successMessage: string
) => {
    await navigator.clipboard.writeText(data)
    toast(successMessage)
}

export const generateRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .toUpperCase()}`

// export const calculateNumberFromPercentage = (
//     x: number,
//     total: number
// ): number => {
//
//     return total - (x * total) / 100
// }
