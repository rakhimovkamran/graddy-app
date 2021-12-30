import { FC } from "react"
import { TColor } from "common/interfaces"

import { Color } from "common/components/atoms"
import { PlusCircleIcon } from "common/components/atoms/Icon"

interface IColorsProps {
    onChange: (color: TColor, id: number) => void
    onColorAdd: () => void
    colors: TColor[]
}

export const Colors: FC<IColorsProps> = ({ colors, onChange, onColorAdd }) => {
    return (
        <section className={"flex gap-2 items-center"}>
            {colors.map((color, idx) => (
                <Color onChange={onChange} value={color} id={idx} key={idx} />
            ))}

            <PlusCircleIcon
                onClick={() => colors.length <= 5 && onColorAdd()}
                className={`w-5 h-5 cursor-pointer opacity-70 transition-opacity ${
                    colors.length <= 5
                        ? "hover:opacity-100"
                        : "cursor-not-allowed"
                }`}
            />
        </section>
    )
}
