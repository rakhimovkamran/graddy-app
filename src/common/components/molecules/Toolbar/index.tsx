import { FC } from "react"
import { AnimatePresence } from "framer-motion"

import { CodeIcon, ResetIcon } from "common/components/atoms/Icon"
import { ToolbarAction } from "common/components/atoms"

interface IToolbarProps {
    isResetAvailable: boolean
    onReset: () => void
    onCopy: () => void
}

export const Toolbar: FC<IToolbarProps> = ({
    isResetAvailable,
    onReset,
    onCopy,
}) => {
    return (
        <section
            className={
                "toolbar absolute transition-all opacity-0 z-100 p-3 w-full flex justify-between"
            }
        >
            <AnimatePresence>
                <ToolbarAction
                    Icon={CodeIcon}
                    caption={"Copy CSS"}
                    onClick={onCopy}
                />
                {isResetAvailable && (
                    <ToolbarAction
                        Icon={ResetIcon}
                        caption={"Reset"}
                        onClick={onReset}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}
