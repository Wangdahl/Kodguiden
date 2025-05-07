import { NavLink } from "react-router-dom"
import items from '../assets/q_a_guide.json'

//Adjust EXCERPT_LENGTH to change how many characters are showin in the preview
const LINK_LENGTH = 25;

export default function Sidebar() {
    return (
        <aside className="
            row-start-2
            col-start-1
            m-5
            overflow-y-auto
        ">
            <ul className="
                space-y-3
            ">
                {items.map(item => (
                    <li key={item.id}>
                        <NavLink 
                            to={`/post/${item.id}`}
                            className={({isActive}) => 
                                isActive ? 'active-side-link' : undefined
                            }
                        >
                            {item.question}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    )
}