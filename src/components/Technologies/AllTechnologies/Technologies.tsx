import { use, useState } from "react"
import type { TData } from "../../types/type"
import Technology from "./Technology"
import MyStacks from "../myStack/MyStacks"

function Technologies({ data }: { data: Promise<TData[]> }) {
    const datas = use(data)

    const [selectedStacks, setSelectedStacks] = useState<TData[]>([])
    // console.log(selectedStacks)
    return (
        <div className="grid grid-cols-4 gap-5">
            <div className="col-span-3">
                <div className="grid grid-cols-3 gap-5">
                    {
                        datas.map((data, i) => <Technology selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} data={data} key={i} />)
                    }
                </div>
            </div>
            <div className="">
                <MyStacks selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} />
            </div>
        </div>
    )
}

export default Technologies
