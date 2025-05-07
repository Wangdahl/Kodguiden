import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="
            col-span-3
            flex
            justify-between
            py-4
            px-12
        ">
            <h1>Kodguiden</h1>
            <Navbar/>
        </header>
    );
}