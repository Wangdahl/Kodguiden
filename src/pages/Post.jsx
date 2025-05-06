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
            <h2>{post.question}</h2>
            <p>{post.answer}</p>
            <button
                onClick={() => {
                    if (window.history.length > 2) {
                        navigate(-1);
                    } else {
                        navigate('/');
                    }
                }}
                className='back-btn'
            >
                <i class="fa-solid fa-angle-left"></i>
            </button>
        </article>
    )
}