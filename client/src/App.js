/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';

function App() {
  return (
    <div>
      {/* <!-- page navbar --> */}
      <nav className="page-navbar" data-spy="affix" data-offset-top="10" >
        <ul className="nav-navbar container">
          <li className="nav-item"><a href="#" className="nav-link">Начало</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Снимки</a></li>
          <li className="nav-item"><a href="#" className="nav-link"><img src="public_html/assets/imgs/placeholder.svg"
            alt="Download free bootstrap ..." /></a>
          </li>
          <li className="nav-item"><a href="#" className="nav-link">Писания</a></li>
          <li className="nav-item search">
            <a href="javascript:void(0)" className="nav-link search-toggle"><i className="ti-search"></i> Търси</a>
            <div className="search-wrapper">
              <form>
                <input type="search" className="form-control" name="" placeholder="hit enter to search" />
              </form>
            </div>
          </li>
        </ul>
      </nav>
      {/* <!-- end of page navbar -->  */}

      <div className="theme-selector">
        <a href="javascript:void(0)" className="spinner">
          <i className="ti-paint-bucket"></i>
        </a>
        <div className="body">
          <a href="javascript:void(0)" className="light"></a>
          <a href="javascript:void(0)" className="dark"></a>
        </div>
      </div>

      {/* <!-- page header --> */}
      <header className="header">
        <div className="overlay"></div>
        <div className="header-content">
          <h1 className="header-title">Всичко е движение.</h1>
          <p className="header-subtitle">Тук можете да откриете мои снимки на неща, които са ме развълнивали както и мои писания. Оставям и видео, което отразява настоящото ми настроение :) Приятно разхождане из моя свят.</p>

          <button className="btn btn-theme-color modal-toggle"><i className="ti-control-play text-danger"></i> Watch
            Video</button>

        </div>
      </header >
      {/* </header><!-- end of page header --> */}

      {/* <!-- modal --> */}
      <div className="modalBox">
        <div className="modalBox-body">
          <iframe width="100%" height="450px" className="border-0"
            src="https://www.youtube.com/embed/tgbNyZ7vqY?controls=0">
          </iframe>
        </div>
      </div>
      {/* !-- end of modal -->

    <!-- page container --> */}
      <div className="container page-container">
        <div className="col-md-10 col-lg-8 m-auto">
          <h6 className="title mb-4">Снимкария</h6>
          <p className="mb-5">Oбичам да снимам света наоколо, когато имам възможност да съм просто тих наблюдател, вместо активен участник. Различни неща привличат вниманието ми, но има две, които винаги ще ме вълнуват - залезът и луната.</p>
        </div>

        {/* <!-- row --> */}
        <div className="row mb-4">
          <div className="col-md-4">
            <a href="javascript:void(0)" className="overlay-img">
              <img src="public_html/assets/imgs/img-1.jpg"
                alt="Download ..." />
              <div className="overlay"></div>
              <div className="des">
                <h1 className="title">Excepteur sint</h1>
                <h6 className="subtitle">magna aliqua</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="javascript:void(0)" className="overlay-img">
              <img src="public_html/assets/imgs/img-2.jpg"
                alt="Download ..." />
              <div className="overlay"></div>
              <div className="des">
                <h1 className="title">Nostrud exercitation </h1>
                <h6 className="subtitle">nulla pariatur</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="javascript:void(0)" className="overlay-img">
              <img src="public_html/assets/imgs/img-3.jpg"
                alt="Downloa..." />
              <div className="overlay"></div>
              <div className="des">
                <h1 className="title">Excepteur sint</h1>
                <h6 className="subtitle">magna aliqua</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </a>
          </div>
        </div>
        {/* <!-- end of row --> */}

        <a href="#">Виж още... <i className="ti-angle-double-right angle"></i></a>


        <div className="col-md-10 col-lg-8 m-auto">
          <h6 className="title mb-4 mt-5 pt-5">Мое мило дневниче...</h6>
          <p className="mb-5">Преди повече от 20 години се запознах с един от най-влиятелните в моя живот хора. Научи ме да обичам математиката, и не само. Научи ме да споделям с белия лист: "Когато нещо ти тежи, и няма с кой да споделиш, вземи един бял лист и молив, и пиши всичко което ти идва отвътре.".В началото беше трудно, да дадеш гласност на своя вътрешен хаос. Тук ще поместя малка част от тези бели и не толкова "бели" листи от моето минало.</p>
        </div>

        {/* <!-- row --> */}
        <div className="row mb-5">
          <div className="col-md-6">
            <a href="javascript:void(0)" className="card">
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
            <a href="javascript:void(0)" className="card">
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
        </div>
        {/* <!-- end of row --> */}

        <a href="#">Виж още... <i className="ti-angle-double-right angle"></i></a>

      </div>
      {/* <!-- end of page container --> */}

      {/* <!--footer & pre footer --> */}
      <div className="contact-section">
        <div className="overlay"></div>
        {/* <!-- container --> */}
        <div className="container">
          <div className="col-md-10 col-lg-8 m-auto">
            <h6 className="title mb-2">Бял лист за теб:</h6>
            <p className="mb-5">Ако и ти имаш какво да споделиш с мен.</p>
            <form action="" className="form-group">
              <input type="text" size="50" className="form-control" placeholder="Име" required />
              <input type="email" className="form-control" placeholder="Email адрес" requried />
              <textarea name="comment" id="comment" rows="6" className="form-control"
                placeholder="Място за твоето послание..."></textarea>
              <button type="submit" value="Send Message" className="form-control">Изпрати</button>
            </form>
          </div>

          {/* <!-- footer --> */}
          <footer className="footer">
            <p className="infos">&copy;
              <script>document.write(new Date().getFullYear())</script>, Made with <i
                className="ti-heart text-danger"></i> by <a href="http://www.devcrud.com">DevCRUD</a>
            </p>
            <span>|</span>
            <div className="links">
              <a href="#">Начало</a>
              <a href="#">Снимки</a>
              <a href="#">Писания</a>
            </div>
          </footer>
          {/* <!-- end of footer --> */}

        </div>
        {/* <!-- end of container --> */}
      </div>
      {/* <!-- end of pre footer --> */}
    </div>

  );
}

export default App;
