import { use, useState } from "react"
import type { TData } from "../../types/type"
import Technology from "./Technology"
import MyStacks from "../myStack/MyStacks"

function Technologies({ data }: { data: Promise<TData[]> }) {
    const datas = use(data)

    const [selectedStacks, setSelectedStacks] = useState<TData[]>([])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="lg:col-span-3">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        datas.map((data, i) => <Technology selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} data={data} key={i} />)
                    }
                </div>
            </div>
            <div className="sticky top-16 self-start">
                <MyStacks selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} />
            </div>
        </div>
    )
}

export default Technologies
