import { FC, useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

import { TColor } from "common/interfaces"

interface IColorSlidersProps {
    colors: TColor[]
    onChange: (colors: TColor[]) => void
}

export const ColorSliders: FC<IColorSlidersProps> = ({ colors, onChange }) => {
    const [mutableColors, setMutableColors] = useState<TColor[]>(colors)

    const sliderRef = useRef<any>(null)

    const dragValue = (value: number, initial: number, itemIdx: number) => {
        const clientWidth = sliderRef?.current?.clientWidth
        const initialValueInPx = (initial / 100) * clientWidth

        const reducedValue = (
            (Number((value + initialValueInPx).toFixed(0)) * 100) /
            clientWidth
        ).toFixed(0)

        setMutableColors((prev) => {
            const colors = [...prev]
            colors[itemIdx][1] = +reducedValue

            return colors
        })

        onChange(mutableColors)
    }

    useEffect(() => setMutableColors(colors), [colors])

    return (
        <section className={"w-full relative"}>
            <div
                ref={sliderRef}
                className={
                    "border-b border-gray-700 z-40 w-full absolute top-0 left-0"
                }
            />

            {mutableColors.map(([color, percentage], idx) => (
                <motion.button
                    style={{
                        backgroundColor: color,
                        // left: percentage + "%",
                    }}
                    key={idx}
                    drag={"x"}
                    onDragEnd={(e) => {
                        const [translateX] = (
                            e.target as HTMLButtonElement
                        ).style.transform.split(" ")

                        const value = Number(
                            translateX.replace(/[a-z]|[(]|[)]/gi, "")
                        )

                        dragValue(value, 0, idx)
                    }}
                    whileDrag={{ scale: 1.2 }}
                    dragConstraints={sliderRef}
                    dragElastic={0}
                    dragMomentum={false}
                    className={"w-4 h-4 z-50 -top-2 absolute rounded-full"}
                />
            ))}
        </section>
    )
}
