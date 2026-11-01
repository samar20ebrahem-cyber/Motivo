import { NavLink } from 'react-router-dom'
import {
    HiHome,
    HiFolder,
    HiShare,
    HiBookOpen,
    HiClipboardDocumentList,
    HiAcademicCap,
    HiArrowRightOnRectangle
} from 'react-icons/hi2'
import { useState } from 'react'
export function Sidebar() {
    return (
        <>
            <aside className="fixed left-0 top-[72px] z-40 h-[calc(100vh-72px)] w-64 bg-white border-r border-[#E8EBDD] px-4 py-6">
                <ul className="flex flex-col gap-2">

                    <li>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-4 py-3 font-semibold transition-colors ${isActive
                                    ? "bg-[#E8EBDD] text-[#34483A]"
                                    : "text-[#667368] hover:bg-[#E8EBDD]"
                                }`
                            }
                        >
                            <HiHome className="h-5 w-5" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/files"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-4 py-3 font-semibold transition-colors ${isActive
                                    ? "bg-[#E8EBDD] text-[#34483A]"
                                    : "text-[#667368] hover:bg-[#E8EBDD]"
                                }`
                            }
                        >
                            <HiFolder className="h-5 w-5" />
                            <span>My Files</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/mindmaps"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-4 py-3 font-semibold transition-colors ${isActive
                                    ? "bg-[#E8EBDD] text-[#34483A]"
                                    : "text-[#667368] hover:bg-[#E8EBDD]"
                                }`
                            }
                        >
                            <HiShare className="h-5 w-5" />
                            <span>Mind Maps</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/explanation"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-4 py-3 font-semibold transition-colors ${isActive
                                    ? "bg-[#E8EBDD] text-[#34483A]"
                                    : "text-[#667368] hover:bg-[#E8EBDD]"
                                }`
                            }
                        >
                            <HiBookOpen className="h-5 w-5" />
                            <span>AI Explanation</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/quizzes"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-4 py-3 font-semibold transition-colors ${isActive
                                    ? "bg-[#E8EBDD] text-[#34483A]"
                                    : "text-[#667368] hover:bg-[#E8EBDD]"
                                }`
                            }
                        >
                            <HiClipboardDocumentList className="h-5 w-5" />
                            <span>Questions & Quizzes</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/certificates"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-4 py-3 font-semibold transition-colors ${isActive
                                    ? "bg-[#E8EBDD] text-[#34483A]"
                                    : "text-[#667368] hover:bg-[#E8EBDD]"
                                }`
                            }
                        >
                            <HiAcademicCap className="h-5 w-5" />
                            <span>Certificates</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/logout"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-4 py-3 font-semibold transition-colors ${isActive
                                    ? "bg-[#E8EBDD] text-[#34483A]"
                                    : "text-[#667368] hover:bg-[#E8EBDD]"
                                }`
                            }
                        >
                            <HiArrowRightOnRectangle className="h-5 w-5" />
                            <span>Log Out</span>
                        </NavLink>
                    </li>

                </ul>
            </aside>
        </>
    )
}
