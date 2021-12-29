import { Suspense, ReactNode } from "react"
import { BrowserRouter } from "react-router-dom"

export const withRouter = (component: () => ReactNode) => () =>
    (
        <BrowserRouter>
            <Suspense fallback="">{component()}</Suspense>
        </BrowserRouter>
    )
