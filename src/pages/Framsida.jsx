import { useSearchParams, useNavigate } from 'react-router-dom'
import ShortPost from '../components/ShortPost'
import items from '../assets/q_a_guide.json'

//Amount of Post excerpts shown
const PAGE_SIZE = 5;

export default function Framsida() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    //Read filters applied from URL params
    const selectedLangs = searchParams.getAll('lang');
    const selectedLevels = searchParams.getAll('level');
    const pageParam = parseInt(searchParams.get('page') || '1', 10);
    const pageIndex = Math.max(pageParam - 1, 0);

    //Filter items
    const filtered = items.filter((item) => {
        const matchesLangs = selectedLangs.every((lang) => 
            item.language.includes(lang)
        );
        const matchesLevels = 
            selectedLevels.length === 0 ||
            selectedLevels.every((lvl) => item.level === lvl);
        return matchesLangs && matchesLevels;
    })

    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    const pageItems = filtered.slice(
        pageIndex * PAGE_SIZE,
        pageIndex * PAGE_SIZE + PAGE_SIZE
    );

    //Handlers for pagination buttons
    const goToPage = (newPage) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', newPage.toString());
        navigate({ pathname: '/', search: params.toString() });
    };

    return (
        <div className='framsida'>
            <div className='post-container'>
                {pageItems.map((item) => (
                    <ShortPost key={item.id} item={item} />
                ))}
                <div className='pagination-controls'>
                    <button
                        disabled={pageIndex <= 0}
                        onClick={() => goToPage(pageIndex)}
                    >
                        <i className="fa-solid fa-angle-left"></i>Previous
                    </button>
                    <button
                        disabled={pageIndex >= totalPages - 1}
                        onClick={() => goToPage(pageIndex + 2)}
                    >
                        Next<i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

