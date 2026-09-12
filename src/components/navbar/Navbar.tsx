import navHamBurgerImg from '../../ui/hamburger.png'
import navTitleImg from '../../assets/logo-text.png'
import NavMenu from './NavMenu'

export default function Navbar() {

    return (
        <>
            <div className="max-lg:collapse border-b border-slate-300 w-full font-bold">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar">
                    <div className="navbar-start flex justify-between">
                        <label htmlFor="navbar-1-toggle" className="btn btn-ghost md:hidden">
                            <img src={navHamBurgerImg} alt="" />
                        </label>
                        <img className='navbar-center' src={navTitleImg} alt="" />
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <NavMenu flex={true} />
                    </div>
                    <div className="navbar-end gap-2">
                        <button className="">Sign In</button>
                        <button className="btn text-white btn-secondary rounded-full">Sign Up</button>
                    </div>
                </div>

                <div className="collapse-content md:hidden z-1">
                    <NavMenu />
                </div>
            </div>
        </>
    )
}