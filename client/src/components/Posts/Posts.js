import { usePostContext } from "../../contexts/PostContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from 'react-router-dom';
import { PostItem } from "./PostItem/PostItem";

export const Posts = () => {
    const { posts } = usePostContext();
    const { isAuthenticated } = useAuthContext();

    return (
        <div className="page-container">
            <h1 className="title">Всички писания:</h1>
            <br />
            <div className="col-md-10 col-lg-4 m-auto">
                {isAuthenticated && <Link to="/create-post" className="nav-link"><input type="submit" className="form-control" value="Напиши ново..." /></Link>}
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