import SubPara from "../subpara/SubPara"
import Technologies from "./AllTechnologies/Technologies"

const TechnologiesHeader = () => {

    const bgGradient = {
        background: 'linear-gradient(to right, #FF5722, #D81B7E, #7C3AED)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    }

    return (
        <div>
            <p className="font-bold text-3xl">Explore the <span style={bgGradient}>Technologies</span></p>
            <SubPara text="Pick one technology per category to build your ideal stack." />
            <div className="py-6">
                <Technologies />
            </div>
        </div>
    )
}

export default TechnologiesHeader
