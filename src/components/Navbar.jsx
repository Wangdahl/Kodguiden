import { NavLink } from "react-router-dom";
import '../index.css'

export default function Navbar ({isOpen, onToggleMenu}) {
    return (
        <>
            <button 
                onClick={onToggleMenu}
                className='
                    lg:hidden 
                    flex items-center justify-center
                    w-9 h-9
                    bg-green-800 text-green-50 rounded-full
                '
            >
                {/* Swap burger to close icon*/}
                <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`} />
            </button>
            <nav className={`
                main-nav flex flex-col justify-center
                bg-white shadow-[5px_5px_5px_-5px_rgba(0,0,0,0.1)] p-4
                absolute inset-y-13 left-0 w-55 h-45 z-30 rounded-br-xl
                transform transition-transform duration-300
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:relative lg:translate-x-0 lg:inset-auto lg:w-auto lg:h-auto
                lg:flex-row lg:space-x-4 lg:shadow-none
            `}>
                <ul className="
                    flex flex-col pl-8 text-lg gap-2 
                    lg:flex-row lg:space-x-4 lg:pl-0 lg:gap-0
                ">
                    <li className="nav-li">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) => 
                                isActive ? 'nav-link nav-link-active' : 'nav-link'
                            }
                        >
                            Start
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink
                            to='/om-oss'
                            className={({ isActive }) => 
                                isActive ? 'nav-link nav-link-active' : 'nav-link'
                            }
                        >
                            Om kodguiden
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink
                            to='/kontakt'
                            className={({ isActive }) => 
                                isActive ? 'nav-link nav-link-active' : 'nav-link'
                            }
                        >
                            Kontakt
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}