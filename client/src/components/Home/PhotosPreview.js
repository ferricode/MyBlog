/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';

export const PhotosPreview = () => {
    return (
        <div>
            <div className="col-md-10 col-lg-8 m-auto">
                <h6 className="title mb-4">Снимкария</h6>
                <p className="mb-5">Oбичам да снимам света наоколо, когато имам възможност да съм просто тих наблюдател, вместо активен участник.</p>
            </div>

            <div className="row mb-4">
                <div className="col-md-4">
                    <a href={void (0)} className="overlay-img">
                        <img src="public_html/assets/imgs/img-1.jpg"
                            alt="Download ..." />
                        <div className="overlay"></div>
                        <div className="des">
                            <h1 className="title">Пътят</h1>
                            {/* <h6 className="subtitle">magna aliqua</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p> */}
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="#" className="overlay-img">
                        <img src="public_html/assets/imgs/img-2.jpg"
                            alt="Download ..." />
                        <div className="overlay"></div>
                        <div className="des">
                            <h1 className="title">Залез</h1>
                            {/* <h6 className="subtitle">nulla pariatur</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p> */}
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="#" className="overlay-img">
                        <img src="public_html/assets/imgs/img-3.jpg"
                            alt="Downloa..." />
                        <div className="overlay"></div>
                        <div className="des">
                            <h1 className="title">Кападокя</h1>
                            {/* <h6 className="subtitle">magna aliqua</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p> */}
                        </div>
                    </a>
                </div>
            </div>
            <Link to="/photos">Виж още... <i className="ti-angle-double-right angle"></i></Link>
        </div>
    );
};;