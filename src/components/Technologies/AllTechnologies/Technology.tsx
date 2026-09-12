import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import SubPara from "../../subpara/SubPara"
import type { TData } from "../../types/type"
import { Bounce, toast, ToastContainer } from "react-toastify"

const Technology = ({ data, selectedStacks, setSelectedStacks }: { data: TData, selectedStacks: TData[], setSelectedStacks: Dispatch<SetStateAction<TData[]>> }) => {


    const { id, name, category, description, icon, rating, difficulty, badge } = data

    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        const isSelected = selectedStacks.some(s => s.id === id)
        if (!isSelected) setClicked(false)
    }, [selectedStacks])

    const handleClick = () => {
        setClicked(true)
        if (!clicked) {
            const newData = selectedStacks.find(se => se.id === id)
            if (newData) return
            else {
                setSelectedStacks([...selectedStacks, data])
                toast(`${name} Added To Stack`, {
                    position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce,
                })
            };
        }
    }

    return (
        <div>
            <div className={`card h-96 ${clicked ? 'border-2 border-error' : "shadow-sm"}`}>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <img className="w-10 h-10" src={icon} alt="" />
                        <span className="badge badge-sm badge-success">{badge}</span>
                    </div>
                    <div className="">
                        <h2 className="text-3xl font-bold">{name}</h2>
                    </div>
                    <SubPara text={description} />
                    <div className="text-center flex justify-between items-center">
                        <span className="badge badge-md badge-soft">{category}</span>
                        <p>{difficulty}</p>
                        <p>⭐{rating}</p>
                    </div>
                    <div className="">
                        <ToastContainer />
                        <button onClick={handleClick} className={`btn ${clicked ? 'cursor-not-allowed btn-outline btn-error' : 'btn-neutral'} w-full rounded-lg`}>{`${clicked ? '✓Added To Stack' : 'Add To Stack'}`}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology
