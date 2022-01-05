import { FC, useMemo, useState } from "react"

import { IGradient, TColor } from "common/interfaces"

import { AngleRange, Colors, Toolbar } from "common/components/molecules"
import {
    generateGradient,
    generateRandomColor,
    handleCopyToClipboard,
} from "common/utils"
import { Angle } from "common/components/atoms"

interface ICardProps {
    initialGradient: IGradient
}

export const Card: FC<ICardProps> = ({ initialGradient }) => {
    const [gradient, setGradient] = useState(initialGradient),
        [isAngleVisible, setAngleVisible] = useState(false)

    const backgroundImage = useMemo(
        () => generateGradient(gradient),
        [gradient]
    )

    const isResetAvailable = useMemo(
        () =>
            JSON.stringify(gradient) !== JSON.stringify(initialGradient) ||
            JSON.stringify(gradient.colors) !==
                JSON.stringify(initialGradient.colors),
        [gradient, initialGradient]
    )

    const handleAngleChange = (angle: number) =>
        setGradient((prev) => ({ ...prev, angle }))

    const handleColorChange = (color: TColor, id: number) => {
        setGradient((prev) => {
            const { colors } = { ...prev },
                [value] = color

            colors[id][0] = value

            return {
                ...prev,
                colors,
            }
        })
    }

    // TODO: Add when color sliders will be ready
    const handleColorAdd = () => {
        setGradient((prev) => {
            const colors = [...prev.colors]
            colors.push([generateRandomColor(), 100])

            return {
                ...prev,
                colors,
            }
        })
    }

    return (
        <article
            onClick={() => {
                console.log(initialGradient, gradient)
            }}
            className={"w-full transition-all gradient__card relative"}
        >
            <Toolbar
                onReset={() => setGradient(initialGradient)}
                isResetAvailable={isResetAvailable}
                onCopy={() =>
                    handleCopyToClipboard(
                        `background: ${generateGradient(gradient)};`,
                        "Gradient was copied !"
                    )
                }
            />

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
