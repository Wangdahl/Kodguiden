import { NavLink } from "react-router-dom"
import items from '../assets/q_a_guide.json'

//Adjust EXCERPT_LENGTH to change how many characters are showin in the preview
const LINK_LENGTH = 25;

export default function Sidebar( ) {
    return (
        <aside className='
            bg-white
            hidden
            lg:block
            lg:w-[250px]
            lg:row-start-2 
            lg:col-start-1 m-5 p-1 border border-green-800 rounded-xl shadow-lg
            lg:relative 
            lg:translate-x-0 
            lg:inset-auto 
            lg:m-5
            lg:overflow-hidden
        '>
            <div className="
                overflow-y-auto
                m-1
                p-1
                h-full
            ">
                <ul className="
                    space-y-3
                ">
                    {items.map(item => (
                        <li key={item.id}className="
                            hover:border-b border-green-800
                            hover:shadow-[0_6px_6px_-4px_rgba(0,0,0,0.1)]
                            transition duration-200
                            pl-1
                        ">
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
            </div>
        </aside>
    )
}