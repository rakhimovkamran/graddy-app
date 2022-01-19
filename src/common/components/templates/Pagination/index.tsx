import { FC, useState } from "react"

import { ChevronLeftIcon, ChevronRightIcon } from "common/components/atoms/Icon"

interface IPaginationProps {
    total: number
    onChange: (page: number) => void
}

export const Pagination: FC<IPaginationProps> = ({ total, onChange }) => {
    const [activePage, setActivePage] = useState<number>(1)

    const handleDecrement = () => {
        if (activePage >= 2) {
            setActivePage((prev) => prev - 1)
            console.log(activePage)
            onChange(activePage - 1)
        }
    }

    const handleIncrement = () => {
        if (activePage < total) {
            setActivePage((prev) => prev + 1)
            console.log(activePage)
            onChange(activePage + 1)
        }
    }

    const handleChoose = (page: number) => {
        setActivePage(page)
        onChange(page)
    }

    return (
        <section className={"w-full mt-10 flex justify-center items-center"}>
            <ChevronLeftIcon
                onClick={handleDecrement}
                className={`w-8 h-8 rounded-lg p-1 transition-all dark:text-white text-gray-900 ${
                    activePage === 1
                        ? "opacity-20"
                        : "hover:bg-gray-900 hover:text-white cursor-pointer"
                }`}
            />

            <div
                className={
                    "flex gap-8 mx-4 select-none dark:text-white text-gray-900"
                }
            >
                {new Array(total)
                    .fill(0)
                    .map((_, idx) => idx + 1)
                    .map((page) => (
                        <span
                            onClick={() => handleChoose(page)}
                            className={`transition-all cursor-pointer font-light text-sm hover:opacity-100 ${
                                activePage === page
                                    ? "opacity-100"
                                    : "opacity-50"
                            }`}
                            key={page}
                        >
                            {page}
                        </span>
                    ))}
            </div>

            <ChevronRightIcon
                onClick={handleIncrement}
                className={`w-8 h-8 rounded-lg p-1 transition-all text-gray-900 dark:text-white ${
                    activePage === total
                        ? "opacity-20"
                        : "hover:bg-gray-900 hover:text-white cursor-pointer"
                }`}
            />
        </section>
    )
}
