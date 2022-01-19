import { useMemo, useState } from "react"

import { IGradient } from "common/interfaces"

import { Grid, Pagination } from "common/components/templates"
import { Card } from "common/components/molecules"

import DATA from "common/data/gradients.json"
import { splitIntoChunks } from "common/utils"

const GRADIENTS_DATA = DATA as IGradient[]
const chunkedData = splitIntoChunks(GRADIENTS_DATA, 9)

const Home = () => {
    const [activePage, setActivePage] = useState<number>(1)

    const data = useMemo(() => {
        return chunkedData[activePage - 1]
    }, [activePage])

    return (
        <main
            onClick={() =>
                console.log(chunkedData, chunkedData[activePage - 1])
            }
        >
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
