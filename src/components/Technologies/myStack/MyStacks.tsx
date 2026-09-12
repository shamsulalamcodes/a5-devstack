import type { TData } from "../../types/type"
import SubPara from "../../subpara/SubPara"
import type { Dispatch, SetStateAction } from "react"
import MyStack from "./MyStack"
import NoStack from "./NoStack"

const MyStacks = ({ selectedStacks, setSelectedStacks }: { selectedStacks: TData[], setSelectedStacks: Dispatch<SetStateAction<TData[]>> }) => {

    const removeAll = () => {
        setSelectedStacks([])
    }

    return (
        <div>
            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="">
                        <h2 className="text-3xl font-bold">Your Stack</h2>
                        <SubPara text={`${selectedStacks.length === 0 ? "No" : selectedStacks.length} Technology Selected`} />
                    </div>
                    <div className="">
                        {
                            selectedStacks.length === 0 ? <NoStack /> : selectedStacks.map((sel, i) => <MyStack key={i} data={sel} setSelectedStacks={setSelectedStacks} selectedStacks={selectedStacks} />)
                        }
                    </div>
                    <div className="">
                        <button onClick={removeAll} className="btn btn-outline btn-error w-full">Remove All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyStacks
