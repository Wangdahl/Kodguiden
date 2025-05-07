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
        <NavLink to={`post/${id}`} className='
            short-post
            block
            border-b border-green-800
            pb-2
            mb-6
            hover:shadow-md
            transition-shadow duration-200 ease-in-out
            
        '>
            <h2 className="
                pb-2
            ">{question}</h2>
            <p>{excerpt}</p>
            <div className="post-tags
                m-1
            ">
                {language.map((lang) => (
                    <span key={lang} className="tag-small
                    text-xs
                    font-semibold
                    py-0.5
                    px-2
                    uppercase
                    rounded-2xl
                    bg-green-800
                    text-green-50
                    mr-2
                ">
                        {lang}
                    </span>
                ))}
                <span className="tag-small
                    text-xs
                    font-semibold
                    py-0.5
                    px-2
                    uppercase
                    rounded-2xl
                    bg-green-800
                    text-green-50
                ">{level}</span>
            </div>
        </NavLink>
    )
}