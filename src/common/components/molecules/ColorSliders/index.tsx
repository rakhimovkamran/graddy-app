import { FC, useRef, useMemo, useState, useEffect } from "react"
import { motion } from "framer-motion"

import { TColor } from "common/interfaces"

interface IColorSlidersProps {
    colors: TColor[]
}

export const ColorSliders: FC<IColorSlidersProps> = ({ colors }) => {
    const parentRef = useRef<any>(null)
    const [parentWidth, setParentWidth] = useState(0)
    const [x, setX] = useState()

    useEffect(() => {
        if (parentRef.current.clientWidth) {
            setParentWidth(parentRef.current.clientWidth)
        }
    }, [parentRef])

    return (
        <section className={"w-full relative"}>
            <div
                ref={parentRef}
                className={
                    "border-b border-gray-700 z-40 w-full absolute top-0 left-0"
                }
            />

            {colors.map(([color, percentage], idx) => (
                <motion.button
                    initial={{
                        left: `${percentage}%`,
                    }}
                    key={idx}
                    drag={"x"}
                    whileDrag={{ scale: 1.2 }}
                    dragConstraints={{
                        right: parentWidth,
                        left: 0,
                    }}
                    style={{
                        backgroundColor: color,
                    }}
                    className={"w-4 h-4 z-50 -top-2 absolute rounded-full"}
                />
            ))}
        </section>
    )
}
