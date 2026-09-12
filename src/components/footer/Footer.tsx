import footerLogo from '../../assets/logo-text.png'
import SubPara from '../subpara/SubPara'
function Footer() {
    return (
        <div>
            <footer className="footer sm:footer-horizontal p-10 border-b border-slate-100">
                <aside className=''>
                    <img src={footerLogo} alt="" />
                    <SubPara text='Curated tools, technologies, and resources for developers building modern software.' />
                    <div className="flex gap-5 font-bold text-slate-600">
                        <p>Github</p>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                    </div>
                </aside>
                <nav>
                    <h6 className="font-bold text-black">Product</h6>
                    <a className="text-slate-500">Home</a>
                    <a className="text-slate-500">Technologies</a>
                    <a className="text-slate-500">Projects</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-black">Company</h6>
                    <a className="text-slate-500">About</a>
                    <a className="text-slate-500">Contact</a>
                    <a className="text-slate-500">Career</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-black">Legal</h6>
                    <a className="text-slate-500">Terms of service</a>
                    <a className="text-slate-500">Privacy policy</a>
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
