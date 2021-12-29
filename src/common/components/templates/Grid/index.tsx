import { FC } from "react"

export const Grid: FC = ({ children }) => {
    return (
        <section
            className={
                "grid grid-cols-1 transition-all md:grid-cols-2 lg:grid-cols-3 gap-10"
            }
        >
            {children}
        </section>
    )
}
