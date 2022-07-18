const YEAR = new Date().getFullYear();

const THEME = {
    search: true,
    darkMode: true,
    nextLinks: true,
    prevLinks: true,
    footer: (
        <small style={{ display: "block", marginTop: "8rem" }}>
            <time>{YEAR}</time> © EDUsg
            <a href="/feed.xml">RSS</a>
            <style jsx>{`
                a {
                    float: right;
                }
                @media screen and (max-width: 480px) {
                    article {
                        padding-top: 2rem;
                        padding-bottom: 4rem;
                    }
                }
            `}</style>
        </small>
    ),
};

export default THEME;
