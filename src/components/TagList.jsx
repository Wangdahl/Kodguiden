import { useSearchParams } from "react-router-dom"
import Tag from './Tag'
import items from '../assets/q_a_guide.json'

//A list of tags used to filter the post excerpts on front page

export default function TagList({ isOpen, onClose, className = '' }) {
    const [searchParams] = useSearchParams();
    const selectedLangs = searchParams.getAll('lang');
    const selectedLevels = searchParams.getAll('level');

    //Unique sorted lists of tags
    const languages = Array.from(new Set(items.flatMap((i) => i.language))).sort();
    const levels = Array.from(new Set(items.map((i) => i.level))).sort();

    return (
        <aside className={className}>
            {/* Close button inside drawer (mobile only) */}
            {isOpen && (
                <button
                    onClick={onClose}
                    aria-label="Stäng filter"
                    className="lg:hidden absolute top-2 right-4 p-2 text-green-800 text-3xl"
                >
                ×
                </button>
            )}
            <section className="
                bg-white
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
                bg-white
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