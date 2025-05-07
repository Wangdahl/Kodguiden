import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="
            col-span-3
            flex
            justify-between
            items-center
            px-12
            shadow-md
            box-border
            text-green-900
        ">
            <h1 className="
                font-semibold
            ">Kodguiden</h1>
            <Navbar/>
        </header>
    );
}