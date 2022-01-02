import { FC } from "react"
import { motion } from "framer-motion"
import Tooltip from "react-tooltip"

interface IToolbarAction {
    onClick: () => void
    Icon: any // TODO: Add Typing
    caption: string
}

export const ToolbarAction: FC<IToolbarAction> = ({
    caption,
    onClick,
    Icon,
}) => {
    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClick}
            data-tip={caption}
            className={
                "shadow-md hover:shadow-none cursor-pointer flex transition-all overflow-hidden text-gray-800 dark:text-slate-200 px-3 py-1.5 items-center bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30 rounded-xl"
            }
        >
            <Icon className={"w-5 h-5"} />

            <Tooltip effect={"solid"} />
        </motion.button>
    )
}
