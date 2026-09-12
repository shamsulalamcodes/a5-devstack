import type { TData } from "../../types/type"
import SubPara from "../../subpara/SubPara"
import type { Dispatch, SetStateAction } from "react"
import MyStack from "./MyStack"
import NoStack from "./NoStack"
import { Flip, toast } from "react-toastify"

const MyStacks = ({ selectedStacks, setSelectedStacks }: { selectedStacks: TData[], setSelectedStacks: Dispatch<SetStateAction<TData[]>> }) => {

    const removeAll = () => {
        if (selectedStacks.length > 0) {
            setSelectedStacks([])
            toast.error(`All Stacks Removed`, {
                position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Flip,
            })
        }
        else {
            toast.warning(`No Stack To Remove!`, {
                position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Flip,
            })
        }
    }

    return (
        <div>
            <div className="card shadow-sm mx-auto max-w-96 ">
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
