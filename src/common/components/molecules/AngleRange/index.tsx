import { FC } from "react"

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
    const min = 0,
        max = 360

    const valueWithinLimits = (v: number) => Math.min(Math.max(v, min), max)

    return (
        <CircularInput
            value={valueWithinLimits(angle)}
            onChange={(v) => onChange(valueWithinLimits(v))}
        >
            <CircularTrack />
            <CircularProgress />
            <CircularThumb />
        </CircularInput>
    )
}
