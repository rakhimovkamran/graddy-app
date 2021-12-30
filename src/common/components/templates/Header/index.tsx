import { ThemeToggle } from "common/components/molecules"

export const Header = () => {
    return (
        <nav
            className={
                "w-full h-32 lg:h-36 xl:h-48 border-b mb-12 border-gray-200 transition-all duration-300 dark:border-gray-700 flex items-center justify-between"
            }
        >
            <h1
                className={
                    "text-5xl font-bold text-gray-800 transition-colors dark:text-slate-100 text-center w-full md:text-left"
                }
            >
                Graddy
            </h1>

            <ThemeToggle />
        </nav>
    )
}
