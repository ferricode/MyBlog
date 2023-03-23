export const Footer = () => {
    return (
        <footer className="footer">
            <p className="infos">&copy;
                <script>document.write(new Date().getFullYear())</script>, Made with <i
                    className="ti-heart text-danger"></i> by <a href="http://www.devcrud.com">DevCRUD</a>
            </p>
            <span>|</span>
            <div className="links">
                <a href="/">Начало</a>
                <a href="/photos">Снимки</a>
                <a href="/diary">Писания</a>
            </div>
        </footer>
    );
};