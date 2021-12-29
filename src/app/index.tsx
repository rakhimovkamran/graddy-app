import { withProviders } from "modules/app/providers"
import { Routing } from "pages"

import "assets/css/index.css"

const App = () => {
    return (
        <main className="max-w-5xl mx-auto px-6">
            <Routing />
        </main>
    )
}

export default withProviders(App)
