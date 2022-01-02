export const Footer = () => {
    return (
        <footer
            className={
                "w-full h-32 mt-16 border-t border-gray-200 transition-all duration-300 dark:border-gray-700 flex justify-between items-center"
            }
        >
            <span className={"text-gray-800 dark:text-slate-200 text-sm"}>
                Developed With ❤️ By Kamran
            </span>

            <span className={"text-gray-400 dark:text-gray-600 text-sm"}>
                © {new Date().getFullYear()} Graddy
            </span>
        </footer>
    )
}
