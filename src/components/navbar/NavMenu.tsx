import { useState } from "react"

export default function NavMenu({ flex }: { flex?: boolean }) {

    const [color, setColor] = useState<number | null>(null)
    const navItems = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

    return (
        <div className={`${flex ? 'flex justify-center items-center gap-3' : ''}`}>
            {
                navItems.map((nav, i) => (
                    <p onClick={() => setColor(i)} key={i} className={`${color === i ? 'text-[#DB2777]' : ''}`}>{nav}</p>
                ))
            }
        </div>
    )
}
