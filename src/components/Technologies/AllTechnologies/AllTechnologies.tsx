import { Suspense } from "react"
import type { TData } from "../../types/type"
import Technologies from "./Technologies"

const fetchData = async (): Promise<TData[]> => {
    const res = await fetch('/data.json')
    const data = await res.json()
    return data
}

const data = fetchData()

const AllTechnologies = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <Technologies data={data} />
            </Suspense>
        </div>
    )
}

export default AllTechnologies
