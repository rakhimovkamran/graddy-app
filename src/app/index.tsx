import { withProviders } from "modules/app/providers"
import { Routing } from "pages"

import "assets/css/index.css"

import { Footer, Header } from "common/components/templates"

const App = () => {
    return (
        <main className="max-w-5xl mx-auto px-6">
            <Header />
            <Routing />
            <Footer />
        </main>
    )
}

export default withProviders(App)
