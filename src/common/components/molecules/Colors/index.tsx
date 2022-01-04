import { FC } from "react"
import { LayoutGroup } from "framer-motion"

import { TColor } from "common/interfaces"

import { PlusCircleIcon, SlidersIcon } from "common/components/atoms/Icon"
import { Color } from "common/components/atoms"

interface IColorsProps {
    onChange: (color: TColor, id: number) => void
    onColorAdd: () => void
    colors: TColor[]
}

export const Colors: FC<IColorsProps> = ({ colors, onChange, onColorAdd }) => {
    return (
        <section className={"flex gap-2 items-center"}>
            <LayoutGroup>
                {colors.map((color, idx) => (
                    <Color
                        onChange={onChange}
                        value={color}
                        key={idx}
                        id={idx}
                    />
                ))}
            </LayoutGroup>

            <PlusCircleIcon
                onClick={() => colors.length <= 5 && onColorAdd()}
                className={`w-5 h-5 cursor-pointer opacity-70 transition-opacity ${
                    colors.length <= 5
                        ? "hover:opacity-100"
                        : "cursor-not-allowed"
                }`}
            />

            <SlidersIcon
                className={`w-5 h-5 cursor-pointer opacity-70 transition-opacity hover:opacity-100`}
            />
        </section>
    )
}
