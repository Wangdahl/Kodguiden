import { NavLink } from "react-router-dom"
import items from '../assets/q_a_guide.json'

export default function Sidebar() {
    return (
        <aside>
            <ul>
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