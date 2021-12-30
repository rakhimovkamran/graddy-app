import { FC } from "react"
import { AngleIcon } from "common/components/atoms/Icon"

interface IAngleProps {
    angle: number
}

export const Angle: FC<IAngleProps> = ({ angle }) => {
    return (
        <section
            className={
                "flex gap-2 items-center opacity-60 transition-opacity cursor-pointer hover:opacity-100"
            }
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
