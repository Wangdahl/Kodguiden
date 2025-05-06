import { useSearchParams } from "react-router-dom"
import Tag from './Tag'
import items from '../assets/q_a_guide.json'

//A list of tags used to filter the post excerpts on front page

export default function TagList() {
    const [searchParams] = useSearchParams();
    const selectedLangs = searchParams.getAll('lang');
    const selectedLevels = searchParams.getAll('level');

    //Unique sorted lists of tags
    const languages = Array.from(new Set(items.flatMap((i) => i.language))).sort();
    const levels = Array.from(new Set(items.map((i) => i.level))).sort();

    return (
        <aside className="tag-list">
            <section>
                <h2>Technologies</h2>
                {languages.map((lang) => (
                    <Tag
                        key={lang}
                        label={lang}
                        type='lang'
                        selected={selectedLangs.includes(lang)}
                    />
                ))}
            </section>
            <section>
                <h2>Level</h2>
                {levels.map((lvl) => (
                    <Tag
                        key={lvl}
                        label={lvl}
                        type='level'
                        selected={selectedLevels.includes(lvl)}
                    />
                ))}
            </section>
        </aside>
    )
}