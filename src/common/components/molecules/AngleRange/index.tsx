import { FC, useState, useEffect } from "react"
import { Spring, config } from "react-spring/renderprops.cjs"

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

    useEffect(() => setValue(angle / 360), [angle])

    return (
        <Spring to={{ value }} config={config.stiff}>
            {(props) => (
                <CircularInput
                    value={props.value}
                    onChange={handleChange}
                    radius={75}
                >
                    <CircularTrack
                        strokeWidth={2}
                        stroke={"rgba(255, 255, 255,0.2)"}
                    />
                    <CircularProgress
                        strokeWidth={10}
                        stroke={"rgb(255, 255, 255)"}
                    />
                    <CircularThumb
                        className={"cursor-all-scroll"}
                        fill={"#fff"}
                        r={15}
                    />

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
            )}
        </Spring>
    )
}
