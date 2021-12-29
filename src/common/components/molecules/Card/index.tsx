import { FC } from "react"

import { IGradient } from "common/interfaces"
import { generateGradient } from "common/utils"

interface ICardProps {
    gradient: IGradient
}

export const Card: FC<ICardProps> = ({ gradient }) => {
    return (
        <>
            <div
                className={
                    "w-full h-64 rounded-2xl transition-all duration-300 hover:shadow-lg"
                }
                style={{
                    backgroundImage: generateGradient(gradient),
                }}
            />
        </>
    )
}
