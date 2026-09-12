import SubPara from "../subpara/SubPara"
import AllTechnologies from "./AllTechnologies/AllTechnologies"

const TechnologiesHeader = () => {

    const bgGradient = {
        background: 'linear-gradient(to right, #FF5722, #D81B7E, #7C3AED)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    }

    return (
        <div className="">
            <p className="font-bold text-3xl">Explore the <span style={bgGradient}>Technologies</span></p>
            <SubPara text="Pick one technology per category to build your ideal stack." />
            <div className="py-6">
                <AllTechnologies />
            </div>
        </div>
    )
}

export default TechnologiesHeader
