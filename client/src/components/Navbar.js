export const Navbar = () => {
    return (
        <nav className="page-navbar" data-spy="affix" data-offset-top="10" >
            <ul className="nav-navbar container">
                <li className="nav-item"><a href="/" className="nav-link">Начало</a></li>
                <li className="nav-item"><a href="/photos" className="nav-link">Снимки</a></li>
                <li className="nav-item"><a href="/location" className="nav-link"><img src="public_html/assets/imgs/placeholder.svg"
                    alt="Download free bootstrap ..." /></a>
                </li>
                <li className="nav-item"><a href="/diary" className="nav-link">Писания</a></li>
                <li className="nav-item search">
                    <a href="/search" className="nav-link search-toggle"><i className="ti-search"></i> Търси</a>
                    <div className="search-wrapper">
                        <form>
                            <input type="search" className="form-control" name="" placeholder="hit enter to search" />
                        </form>
                    </div>
                </li>
            </ul>
        </nav>
    );
};