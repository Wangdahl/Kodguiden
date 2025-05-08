
export default function Kontakt() {
    return (
        <section className="contact-us">
            <h2 className='
                mb-3
            '>Kontakt</h2>
            <h3 className='
                mb-1
            '>Kom i kontakt med oss</h3>
            <p className='
                mb-1
            '>
                Har du frågor, förslag eller vill bidra till projektet? Hör av dig via GitHub:
            </p>
            <ul className='
                list-disc list-inside
                mb-3
            '>
                <li className='
                text-green-900
                underline
            '>
                    <a href="https://github.com/Wangdahl" target="_blank" rel="noopener">
                        Min GitHub-profil
                    </a>
                </li>
                <li className='
                text-green-900
                underline
            '>
                    <a href="https://github.com/Wangdahl/Kodguiden" target="_blank" rel="noopener">
                        Kodguiden-repo
                    </a>
                </li>
            </ul>
            <h3 className='
                mb-1
            '>Bli en medförfattare</h3>
            <p>
                Forka gärna repot, gör dina ändringar och skicka en pull-request. Alla förbättringar och idéer värdesätts!
            </p>
        </section>
    )
}