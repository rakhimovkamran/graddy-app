import { FC } from "react"
import { TColor } from "common/interfaces"

import { Color } from "common/components/atoms"

interface IColorsProps {
    onChange: (color: TColor, id: number) => void
    colors: TColor[]
}

export const Colors: FC<IColorsProps> = ({ colors, onChange }) => {
    return (
        <section className={"flex gap-2"}>
            {colors.map((color, idx) => (
                <Color onChange={onChange} value={color} id={idx} key={idx} />
            ))}
        </section>
    )
}
