import { withProviders } from "modules/app/providers"
import { Routing } from "pages"

import "assets/css/index.css"

const App = () => {
    return (
        <main className="container mx-auto">
            <Routing />
        </main>
    )
}

export default withProviders(App)
