import { FC } from "react"
import { AngleIcon } from "common/components/atoms/Icon"

interface IAngleProps {
    isAngleVisible: boolean
    onToggle: () => void
    angle: number
}

export const Angle: FC<IAngleProps> = ({ angle, onToggle, isAngleVisible }) => {
    return (
        <section
            onClick={onToggle}
            className={`flex gap-2 select-none items-center transition-opacity cursor-pointer hover:opacity-100 ${
                isAngleVisible ? "opacity-100" : "opacity-60"
            }`}
        >
            <AngleIcon
                style={{
                    transform: `rotate(${angle}deg)`,
                }}
            />

            <span className={"text-sm text-slate-400"}>
                {angle.toFixed(0)}°
            </span>
        </section>
    )
}
