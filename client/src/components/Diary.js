export const Diary = () => {
    return (
        <div>
            <div className="col-md-10 col-lg-8 m-auto">
                <h6 className="title mb-4 mt-5 pt-5">Мое мило дневниче...</h6>
                <p className="mb-5">Преди повече от 20 години се запознах с един от най-влиятелните в моя живот хора. Научи ме да обичам математиката, и не само. Научи ме да споделям с белия лист: "Когато нещо ти тежи, и няма с кой да споделиш, вземи един бял лист и молив, и пиши всичко което ти идва отвътре.".В началото беше трудно, да дадеш гласност на своя вътрешен хаос. Тук ще поместя малка част от тези бели и не толкова "бели" листи от моето минало.</p>
            </div>


            <div className="row mb-5">
                <div className="col-md-6">
                    <a href="#" className="card">
                        <img src="public_html/assets/imgs/blog-1.jpg" className="card-img"
                            alt="Downloa..." />
                        <div className="card-body">
                            <h6 className="card-subtitle">30 June, 2018</h6>
                            <h3 className="card-title">Eiusmod
                                tempor</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                </div>
                <div className="col-md-6">
                    <a href="#" className="card">
                        <img src="public_html/assets/imgs/blog-2.jpg" className="card-img"
                            alt="Download ..." />
                        <div className="card-body">
                            <h6 className="card-subtitle">29 June, 2018</h6>
                            <h3 className="card-title">Ut minim veniam</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                </div>
            </div>;
            {/* <!-- end of row --> */}

            <a href="#">Виж още... <i className="ti-angle-double-right angle"></i></a>
        </div>

    );
};