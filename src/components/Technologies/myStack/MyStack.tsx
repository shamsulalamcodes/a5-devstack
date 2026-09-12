import type { Dispatch, SetStateAction } from "react"
import type { TData } from "../../types/type"
import { Bounce, toast } from "react-toastify"

const MyStack = ({ data, selectedStacks, setSelectedStacks }: { data: TData, selectedStacks: TData[], setSelectedStacks: Dispatch<SetStateAction<TData[]>> }) => {

    const { id, icon, name, category } = data

    const handleClick = () => {
        const filteredData = selectedStacks.filter(sel => sel.id !== id)
        setSelectedStacks(filteredData)
        toast.error(`${name} Removed From Stack`, {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce,
        })
    }

    return (
        <div>
            <div className="border border-slate-200 rounded-lg my-2">
                <div className="flex justify-between items-center px-2">
                    <div className="flex gap-2 items-center p-3">
                        <div className="">
                            <img className="w-10 h-10" src={icon} alt="" />
                        </div>
                        <div className="">
                            <p className="font-bold">{name}</p>
                            <p className="py-2 text-slate-600">{category}</p>
                        </div>
                    </div>
                    <button onClick={handleClick} className="btn">X</button>
                </div>
            </div>
        </div>
    )
}

export default MyStack
