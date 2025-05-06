import { NavLink } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="main-nav">
            <ul className="nav-ul">
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
    )
}