import { useParams, useNavigate } from 'react-router-dom'
import items from '../assets/q_a_guide.json'

//Display full post as separate page

export default function Post() {
    const navigate = useNavigate();
    const { id } = useParams();
    const post = items.find(i => i.id === Number(id));

    if(!post) {
        return <p>Inlägg med Id {id} hittades inte.</p>
    }

    return (
        <article className='post'>
            <h2 className='
                mb-3
            '>{post.question}</h2>
            <p className='
                mb-3
            '>{post.answer}</p>
            <button
                onClick={() => {
                    if (window.history.length > 2) {
                        navigate(-1);
                    } else {
                        navigate('/');
                    }
                }}
                className='back-btn
                    bg-green-800
                    text-green-50
                    hover:border border-green-900
                    w-10
                    h-10
                    m-2
                    rounded-4xl
                    hover:bg-green-300
                    hover:text-green-900
                    transition duration-300
                    active:scale-105
                '
            >
                <i className="fa-solid fa-angle-left"></i>
            </button>
        </article>
    )
}