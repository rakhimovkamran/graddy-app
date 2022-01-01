import { FC, useMemo, useState } from "react"

import { IGradient, TColor } from "common/interfaces"

import { AngleRange } from "common/components/molecules/AngleRange"
import { Colors } from "common/components/molecules/Colors"
import { Angle } from "common/components/atoms"
import { generateGradient, handleCopyToClipboard } from "common/utils"

interface ICardProps {
    initialGradient: IGradient
}

export const Card: FC<ICardProps> = ({ initialGradient }) => {
    const [gradient, setGradient] = useState(initialGradient)
    const [isAngleVisible, setAngleVisible] = useState(false)

    const backgroundImage = useMemo(
        () => generateGradient(gradient),
        [gradient]
    )

    const handleAngleChange = (angle: number) =>
        setGradient((prev) => ({ ...prev, angle }))

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

    const handleColorAdd = () => {
        setGradient((prev) => {
            const colors = [...prev.colors]
            colors.push(["#FFFFFF", 100])

            return {
                ...prev,
                colors,
            }
        })
    }

    return (
        <article
            onClick={() =>
                handleCopyToClipboard(
                    `background: ${generateGradient(gradient)};`,
                    "Gradient was copied !"
                )
            }
            className={"w-full transition-all relative"}
        >
            <section
                onMouseLeave={() => isAngleVisible && setAngleVisible(false)}
                className={
                    "w-full h-64 mb-4 gradient__card flex justify-center items-center"
                }
                style={{
                    backgroundImage,
                }}
            >
                <div
                    className={`w-full h-full bg-black bg-opacity-20 flex justify-center items-center transition-all ${
                        isAngleVisible
                            ? "visible opacity-100"
                            : "invisible opacity-0"
                    }`}
                >
                    <AngleRange
                        onChange={handleAngleChange}
                        angle={gradient.angle}
                    />
                </div>

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
                <Angle
                    onToggle={() => setAngleVisible((prev) => !prev)}
                    isAngleVisible={isAngleVisible}
                    angle={gradient.angle}
                />

                <div className={"flex"}>
                    <Colors
                        onColorAdd={handleColorAdd}
                        onChange={handleColorChange}
                        colors={gradient.colors}
                    />
                </div>
            </section>
        </article>
    )
}
