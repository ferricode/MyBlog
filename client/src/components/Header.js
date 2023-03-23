export const Header = () => {
    return (
        <header className="header">
            <div className="overlay"></div>
            <div className="header-content">
                <h1 className="header-title">Всичко е движение.</h1>
                <p className="header-subtitle">Тук можете да откриете мои снимки на неща, които са ме развълнивали както и мои писания. Оставям и видео, което отразява настоящото ми настроение :) Приятно разхождане из моя свят.</p>
                <button className="btn btn-theme-color modal-toggle"><i className="ti-control-play text-danger"></i> Watch
                    Video</button>
            </div>
        </header >
    );
};