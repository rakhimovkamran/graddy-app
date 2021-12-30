import { IGradient } from "common/interfaces"

import { Grid, Header } from "common/components/templates"
import { Card } from "common/components/molecules"

import DATA from "common/data/gradients.json"
const GRADIENTS_DATA = DATA as IGradient[]

const Home = () => {
    return (
        <main>
            <Header />

            <section>
                <Grid>
                    {GRADIENTS_DATA.map((gradient, idx) => (
                        <Card key={idx} initialGradient={gradient} />
                    ))}
                </Grid>
            </section>
        </main>
    )
}

export default Home
