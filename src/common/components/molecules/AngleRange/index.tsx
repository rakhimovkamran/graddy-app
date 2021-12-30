import { FC, useState } from "react"

import {
    CircularInput,
    CircularTrack,
    CircularProgress,
    CircularThumb,
} from "react-circular-input"

interface IAngleRangeProps {
    onChange: (angle: number) => void
    angle: number
}

export const AngleRange: FC<IAngleRangeProps> = ({ angle, onChange }) => {
    const [value, setValue] = useState(angle / 360)

    const handleChange = (v: number) => {
        setValue(v)
        onChange(Number((v * 360).toFixed(0)))
    }

    return (
        <CircularInput value={value} onChange={handleChange} radius={75}>
            <CircularTrack strokeWidth={2} stroke={"rgba(255, 255, 255,0.2)"} />
            <CircularProgress strokeWidth={10} stroke={"rgb(255, 255, 255)"} />
            <CircularThumb fill={"#fff"} r={15} />

            <text
                fill={"rgba(255, 255, 255, 0.75)"}
                className={"text-lg"}
                textAnchor="middle"
                dy="0.3em"
                x={75}
                y={75}
            >
                {(value * 360).toFixed(0)}°
            </text>

            <span>Hello</span>
        </CircularInput>
    )
}
