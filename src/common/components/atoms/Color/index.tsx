import { ChangeEvent, FC, useState } from "react"
import { motion } from "framer-motion"

import { TColor } from "common/interfaces"

interface IColorProps {
    onChange: (value: TColor, id: number) => void
    value: TColor
    id: number
}

export const Color: FC<IColorProps> = ({ value, id, onChange }) => {
    const [color, setColor] = useState(value[0])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const [, percentage] = value

        setColor(e.target.value)
        onChange([color, percentage], id)
    }

    return (
        <motion.input
            layout
            onChange={handleChange}
            type={"color"}
            value={color}
            style={{
                backgroundColor: color,
            }}
            className={
                "w-4 h-4 cursor-pointer opacity-90 transition-opacity hover:opacity-100 rounded-full border-none outline-none"
            }
        />
    )
}
