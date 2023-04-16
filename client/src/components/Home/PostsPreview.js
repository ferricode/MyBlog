import { Link } from 'react-router-dom';
import { usePostContext } from "../../contexts/PostContext";

export const PostsPreview = () => {
    const { posts } = usePostContext();

    return (

        <div>
            <div className="col-md-10 col-lg-8 m-auto">
                <h6 className="title mb-4 mt-5 pt-5">Мое мило дневниче...</h6>
                <p className="mb-5">"Когато нещо ти тежи, и няма с когo да споделиш, вземи един бял лист и молив, и пиши всичко което ти идва отвътре.".
                    <br />Трудно е да дадеш гласност на своя вътрешен хаос...
                    <br />Тук ще поместя малка част от тези бели и не толкова "бели" листи от моето пътуване.
                </p>
            </div>
            {posts && posts.length > 0 && (
                <div className="row mb-5">
                    <div className="col-md-6" key={posts[0]._id}>
                        <span className="card">
                            <img src="/public_html/assets/imgs/img-sea.jpg" className="card-img"
                                alt="Downloa..." />

                            <div className="card-body" >
                                <h3 className="card-title">{posts[0].title}</h3>
                                <p>{posts[0].content.substring(0, 150) + '...'}</p>
                            </div>

                        </span>
                    </div>
                    <div className="col-md-6" key={posts[1]._id}>
                        <span className="card">
                            <img src="/public_html/assets/imgs/img-newmoon.jpg" className="card-img"
                                alt="Downloa..." />

                            <div className="card-body" >
                                <h3 className="card-title">{posts[1].title}</h3>
                                <p>{posts[1].content.substring(0, 150) + '...'}</p>
                            </div>

                        </span>
                    </div>
                </div>
            )}
            <Link to="/posts">Виж още... <i className="ti-angle-double-right angle"></i></Link>
        </div>

    );
};