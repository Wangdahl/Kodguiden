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
        <aside className="tag-list
            row-start-2 
            col-start-3
            mr-5
            mt-10
        ">
            <section className="
                flex
                flex-col
                mb-4
                p-3
                border
                border-green-800
                rounded-xl
                shadow-lg
            ">
                <h2 className="
                    pb-4
                    pl-2
                ">Teknologier</h2>
                <div className="
                    flex
                    flex-wrap
                    justify-center
                    items-center
                ">
                    {languages.map((lang) => (
                        <Tag
                            key={lang}
                            label={lang}
                            type='lang'
                            selected={selectedLangs.includes(lang)}
                        />
                    ))}
                </div>
            </section>
            <section className="
                flex
                flex-col
                p-3
                border
                border-green-800
                rounded-xl
                shadow-lg
            ">
                <h2 className="
                    pb-4
                    pl-2
                ">Nivå</h2>
                <div className="
                    flex
                    flex-wrap
                    justify-center
                    items-center
                ">
                    {levels.map((lvl) => (
                        <Tag
                            key={lvl}
                            label={lvl}
                            type='level'
                            selected={selectedLevels.includes(lvl)}
                        />
                    ))}
                </div>
            </section>
        </aside>
    )
}