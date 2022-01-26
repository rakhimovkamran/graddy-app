import { useMemo, useState } from "react"

import { IGradient } from "common/interfaces"

import { Grid, Pagination } from "common/components/templates"
import { Card } from "common/components/molecules"

import { splitIntoChunks } from "common/utils"

import DATA from "common/data/gradients.json"

const GRADIENTS_DATA = DATA as IGradient[],
    chunkSize = 12,
    chunkedData = splitIntoChunks(GRADIENTS_DATA, chunkSize)

const Home = () => {
    const [activePage, setActivePage] = useState<number>(1)

    const data = useMemo(() => chunkedData[activePage - 1], [activePage])

    return (
        <main>
            <Grid>
                {data.map((gradient, idx) => (
                    <Card
                        key={`${Date.now()}_${idx}`}
                        initialGradient={gradient}
                    />
                ))}
            </Grid>

            <Pagination total={chunkedData.length} onChange={setActivePage} />
        </main>
    )
}

export default Home
