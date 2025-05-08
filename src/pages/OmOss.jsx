

export default function OmOss() {

    return (
        <section className="about-us">
            <h2 className='
                mb-3
            '>Kort om kodguiden</h2>
            <h3 className='
                mb-1
            '>Projektets syfte</h3>
            <p className='
                mb-3
            '>
                Kodguiden är ett övningsprojekt vars mål är att skapa en dynamisk plattform som kan användas för Q&A eller som dokumentation. 
                Med kodguiden kan användare:
            </p>
                <ul className='
                mb-2
                list-disc
                list-inside
            '>
                    <li>Bläddra bland vanliga frågor och svar</li>
                    <li>Filtrera innehåll efter språk och svårighetsgrad</li>
                    <li>Dela och bokmärka specifika inlägg via URL</li>
                </ul>
            <p className='
                mb-3
            '>
                Allt för att underlätta inlärning och repetition av webbutvecklingskoncept.
            </p>
            <h3 className='
                mb-1
            '>Kom igång</h3>
            <p>
                Klona repo, installera beroenden och kör: <br /><code className="m-2">npm start</code> <br /> Välkommen att utforska och bidra!
            </p>
            </section>
    )
}