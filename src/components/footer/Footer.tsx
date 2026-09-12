import footerLogo from '../../assets/logo-text.png'
import SubPara from '../subpara/SubPara'
function Footer() {
    return (
        <div>
            <footer className="footer md:flex md:justify-between p-10 border-b border-slate-100">
                <aside className=''>
                    <img src={footerLogo} alt="" />
                    <SubPara text='Curated tools, technologies, and resources for developers building modern software.' />
                    <div className="flex gap-5 font-bold text-slate-600">
                        <p>Github</p>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                    </div>
                </aside>
                <nav className='hidden lg:block'>
                    <h6 className="font-bold text-black">Product</h6>
                    <p className="text-slate-500">Home</p>
                    <p className="text-slate-500">Technologies</p>
                    <p className="text-slate-500">Projects</p>
                </nav>
                <nav className='hidden lg:block'>
                    <h6 className="font-bold text-black">Company</h6>
                    <p className="text-slate-500">About</p>
                    <p className="text-slate-500">Contact</p>
                    <p className="text-slate-500">Career</p>
                </nav>
                <nav className='hidden lg:block'>
                    <h6 className="font-bold text-black">Legal</h6>
                    <p className="text-slate-500">Terms of service</p>
                    <p className="text-slate-500">Privacy policy</p>
                </nav>
            </footer>
            <div className="flex justify-between items-center px-10 pb-5">
                <SubPara text="© 2026 Dev Stack. All rights reserved." />
                <div className="flex gap-10 items-center">
                    <SubPara text="Privacy" />
                    <SubPara text="Terms" />
                </div>
            </div>
        </div>
    )
}

export default Footer
