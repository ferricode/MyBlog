export const Header = () => {
    return (
        <header className="header">
            <div className="overlay"></div>
            <div className="header-content">
                <h1 className="header-title">Всичко е движение.</h1>
                <p className="header-subtitle">Здравей <i className="ti-heart text-danger"></i>
                    <br />Намираш се в моето лично дигитално пространство. Тук ще намериш любими снимки и писания от мен. Оставям и музикално видео за настроение <i className="ti-music text-danger"></i><i className="ti-headphone text-danger"></i>
                    <br />Приятно разхождане.</p>
                <button className="btn btn-theme-color modal-toggle"><i className="ti-control-play text-danger"></i> Watch
                    Video</button>
            </div>
        </header >
    );
};