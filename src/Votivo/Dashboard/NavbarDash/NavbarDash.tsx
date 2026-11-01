import Lumora from '../../../assets/images/logo.jpg'
import { HiMagnifyingGlass, HiBell } from 'react-icons/hi2'
export function NavbarDash() {
    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-full bg-[#FCF4DC] border-b border-[#E8EBDD] shadow-sm px-4 py-4"> 
                <nav className="mx-auto flex w-full items-center justify-between">
                    <div className="logo flex items-center gap-3">
                        <img
                            src={Lumora}
                            alt="Lumora Logo"
                            className="h-10 w-10 rounded-full object-cover"
                        />
                        <p className="text-xl font-bold text-[#34483A]">
                            Lumora AI
                        </p>
                    </div>
                    <div className="flex items-center justify-between  gap-3">
                        <button className="rounded-lg p-3 transition-colors hover:bg-[#E8EBDD]">
                            <HiMagnifyingGlass className="h-6 w-6 text-[#34483A]" />
                        </button>

                        <button className="rounded-lg p-3 transition-colors hover:bg-[#E8EBDD]">
                            <HiBell className="h-6 w-6 text-[#34483A]"/>
                        </button>

                    </div>
                </nav>
            </header>
        </>
    )
}