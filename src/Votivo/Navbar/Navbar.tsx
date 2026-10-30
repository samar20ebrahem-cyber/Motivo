import { MdTranslate } from 'react-icons/md'
import Lumora from '../../assets/images/logo.jpg'
import { FiLogIn } from 'react-icons/fi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export function Navbar() {
    const [language, setLanguage] = useState('en')
    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-[#34483A] border-b border-white/10 px-4 py-4">
            <nav className="mx-auto flex w-full items-center justify-between">
                <div className="logo flex items-center gap-3">
                    <img
                        src={Lumora}
                        alt="Lumora Logo"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <p className="text-xl font-bold text-white">
                        Lumora AI
                    </p>
                </div>

                <div className="links flex items-center gap-3">

                    <button onClick={() => { setLanguage(language === 'en' ? 'ar' : 'en') }} className="flex items-center gap-2 rounded-lg border border-white/15 px-2 py-2 text-base font-semibold text-white transition-colors hover:bg-white/10">
                        <MdTranslate className="text-xl" />
                        <span>{language === 'en' ? 'العربية' : 'English'}</span>
                    </button>

                    <Link to="/login" className="flex items-center gap-2 rounded-lg bg-[#fcf4dc] px-2 py-2 text-base font-semibold text-black transition-all duration-300 hover:bg-[#f0e8d1] hover:shadow-lg hover:shadow-[#34483A]/20">
                        <FiLogIn className="text-xl" />
                        <span>Login </span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
