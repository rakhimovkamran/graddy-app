import { useState, useEffect } from "react"

export const ThemeToggle = () => {
    const [isChecked, setChecked] = useState(true)

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark")
            setChecked(true)
        } else {
            document.documentElement.classList.remove("dark")
            setChecked(false)
        }
    }, [])

    const handleThemeChange = () => {
        if (isChecked) {
            setChecked(false)
            document.documentElement.classList.remove("dark")
            localStorage.theme = "light"
        } else {
            setChecked(true)
            document.documentElement.classList.add("dark")
            localStorage.theme = "dark"
        }
    }

    return (
        <input
            onChange={handleThemeChange}
            checked={!isChecked}
            id="dark-mode__toggle"
            className="dark-mode__toggle"
            type="checkbox"
        />
    )
}
