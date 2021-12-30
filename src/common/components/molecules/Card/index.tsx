import { FC, useMemo, useState } from "react"
import { IGradient, TColor } from "common/interfaces"

// import { AngleRange } from "common/components/molecules/AngleRange"
import { generateGradient } from "common/utils"
import { Angle } from "common/components/atoms"
import { Colors } from "common/components/molecules/Colors"

interface ICardProps {
    initialGradient: IGradient
}

export const Card: FC<ICardProps> = ({ initialGradient }) => {
    const [gradient, setGradient] = useState(initialGradient)

    const backgroundImage = useMemo(
        () => generateGradient(gradient),
        [gradient]
    )

    // const handleAngleChange = (angle: number) =>
    //     setGradient((prev) => ({ ...prev, angle }))

    const handleColorChange = (color: TColor, id: number) => {
        setGradient((prev) => {
            const { colors } = prev,
                [value] = color

            colors[id][0] = value

            return {
                ...prev,
                colors,
            }
        })
    }

    return (
        <article className={"w-full transition-all relative"}>
            <section
                className={
                    "w-full h-64 mb-4 gradient__card flex justify-center items-center"
                }
                style={{
                    backgroundImage,
                }}
            >
                {/*<AngleRange*/}
                {/*    onChange={handleAngleChange}*/}
                {/*    angle={gradient.angle}*/}
                {/*/>*/}

                <div
                    className={
                        "w-full h-64 absolute -z-50 top-0 left-0 blur-xl gradient__card-blurred blur-xl"
                    }
                    style={{
                        backgroundImage,
                    }}
                />
            </section>

            <section className={"flex items-center justify-between"}>
                <Angle angle={gradient.angle} />

                <div className={"flex"}>
                    <Colors
                        onChange={handleColorChange}
                        colors={gradient.colors}
                    />
                </div>
            </section>
        </article>
    )
}
