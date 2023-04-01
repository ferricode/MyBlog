import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="page-navbar" data-spy="affix" data-offset-top="10" >
            <ul className="nav-navbar container">
                <li className="nav-item"><Link to="/" className="nav-link">Начало</Link></li>
                <li className="nav-item"><Link to="/photos" className="nav-link">Снимки</Link></li>
                <li className="nav-item"><Link to="/posts" className="nav-link">Писания</Link></li>
                <li className="nav-item"><Link to="/location" className="nav-link"><img src="public_html/assets/imgs/placeholder.svg"
                    alt="Location" /></Link >
                </li>
                <li className="nav-item"><Link to="/login" className="nav-link">Вписване</Link></li>
                <li className="nav-item"><Link to="/register" className="nav-link">Регистрация</Link></li>
                <li className="nav-item search">
                    <Link to="/search" className="nav-link search-toggle"><i className="ti-search"></i> Търси</Link>
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