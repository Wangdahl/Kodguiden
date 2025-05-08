import { useState } from 'react';
import Navbar from "./Navbar";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="
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
            ">Kodguiden</h1>
            <Navbar 
                isOpen={menuOpen}
                onToggleMenu={() => setMenuOpen(prev => !prev)}
            />
        </header>
    );
}