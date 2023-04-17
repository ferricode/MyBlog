import { usePostContext } from "../../contexts/PostContext";
import { Link } from 'react-router-dom';
import { PostItem } from "./PostItem/PostItem";

export const Posts = () => {
    const { posts } = usePostContext();

    return (
        <div className="page-container">
            <h1 className="title">Всички писания:</h1>
            <br />
            <div className="col-md-10 col-lg-4 m-auto">
                <Link to="/create-post" className="nav-link"><input type="submit" className="form-control" value="Напиши ново..." /></Link>
            </div>
            <br />
            <div className="row mb-4">
                {posts.map(x =>
                    <PostItem key={x._id} {...x} />
                )}
            </div>
            {posts.length === 0 && (
                <h6 className="title">Пише се в момента...</h6>
            )}
        </div >
    );
};