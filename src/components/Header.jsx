import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "./Navbar";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="
            bg-white
            col-span-3
            flex
            justify-between
            items-center
            px-12
            py-2.5
            shadow-md
            box-border
            text-green-900
        ">
            <h1 className="
                font-semibold
            "><NavLink
                to='/'
            >
                Kodguiden
            </NavLink></h1>
            <Navbar 
                isOpen={menuOpen}
                onToggleMenu={() => setMenuOpen(prev => !prev)}
            />
        </header>
    );
}