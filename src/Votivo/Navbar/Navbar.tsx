import './Navbar.css'
import { MdTranslate } from 'react-icons/md'
export function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <h1>Motivo</h1>
                    <button className='nav'>
                        <MdTranslate/>
                        <span>العربية</span>
                    </button>
                </nav>
            </header>

        </>
    )
}