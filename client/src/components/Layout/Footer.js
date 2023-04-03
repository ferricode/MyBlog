import { Link } from 'react-router-dom';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="infos">&copy;
                <span>{currentYear}</span>, Made with <i
                    className="ti-heart text-danger"></i> by <Link to="http://www.devcrud.com">DevCRUD</Link>
            </p>
            <span>|</span>
            <div className="links">
                <Link to="/">Начало</Link>
                <Link to="/photos">Снимки</Link>
                <Link to="/posts">Писания</Link>
            </div>
        </footer>
    );
};