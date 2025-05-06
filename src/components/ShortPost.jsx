import { NavLink } from "react-router-dom"

//Post excerpts displayed on the fronpage

//Adjust EXCERPT_LENGTH to change how many characters are showin in the preview
const EXCERPT_LENGTH = 100;

export default function ShortPost({ item }) {
    const { id, question, answer, language, level } = item;
    const excerpt = 
        answer.length > EXCERPT_LENGTH
            ? answer.slice(0, EXCERPT_LENGTH) + '...'
            : answer;

    return (
        <NavLink to={`post/${id}`} className='short-post'>
            <h3>{question}</h3>
            <p>{excerpt}</p>
            <div className="post-tags">
                {language.map((lang) => (
                    <span key={lang} className="tag-small">
                        {lang}
                    </span>
                ))}
                <span className="tag-small">{level}</span>
            </div>
        </NavLink>
    )
}