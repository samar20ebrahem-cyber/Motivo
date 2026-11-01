import { NavbarDash } from './NavbarDash/NavbarDash.tsx'
import {Sidebar} from './Sidebar/Sidebar.tsx'
import {HomeDash} from './PagesDash/HomeDash/HomeDash.tsx'
export function ShowDashboard() {
    return (
        <>
            <NavbarDash />
            <Sidebar/>
            <main className="ml-16 mt-[72px] min-h-[calc(100vh-72px)] bg-[#F7F5EC] p-6">
                <HomeDash />
            </main>
        </>
    )
}