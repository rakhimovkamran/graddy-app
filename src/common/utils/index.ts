import { IGradient, TColor } from "common/interfaces"
import { toast } from "react-toastify"

export function createColorStop(colorStop: TColor) {
    return ` ${colorStop[0].toUpperCase()} ${colorStop[1]}%`
}

export function reduceColorStops(colorStops: TColor[]) {
    return colorStops.map(createColorStop).join(", ")
}

export function generateGradient(data: IGradient) {
    return `linear-gradient(${data.angle}deg, ${reduceColorStops(data.colors)})`
}

export async function handleCopyToClipboard(
    data: string,
    successMessage: string
) {
    await navigator.clipboard.writeText(data)
    toast(successMessage)
}

export function generateRandomColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .toUpperCase()}`
}

export function splitIntoChunks(arr: any[], chunkSize: number) {
    const res = []

    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize)
        res.push(chunk)
    }

    return res
}
