import heroImg from '../../assets/banner-stack.png';
import SubPara from '../subpara/SubPara';

function Banner() {

    const bgGradient = {
        background: 'linear-gradient(to right, #FF5722, #D81B7E, #7C3AED)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    }
    const backgroundGradient = {
        background: 'linear-gradient(to right, #FF5722, #D81B7E, #7C3AED)',
        color: 'white'
    }

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col justify-between md:flex-row-reverse">
                    <div className="w-1/3">
                        <img
                            src={heroImg}
                            className="w-full"
                        /></div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Build Your Ideal
                            <span style={bgGradient}> Development Stack</span></h1>
                        <SubPara text="
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits your
                            next project.       "/>
                        <button className="btn rounded-lg mr-2" style={backgroundGradient}>Explore Technologies</button>
                        <button className="btn rounded-lg text-slate-600">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
