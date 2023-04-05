//import { usePostsContext } from "../../contexts/usePostsContext";

import { PostItem } from "./PostItem/PostItem";
import "./Posts.css";

export const Posts = ({ posts }) => {
    //const { posts } = usePostsContext{}

    return (
        <div className="page-container">
            <h1 className="text-center">Всички писания:</h1>
            <br />
            <div className="row mb-4">
                {posts?.map(x =>
                    <PostItem key={x._id} {...x} />
                )}
            </div>
            {!posts && (
                <h3 className="no-articles">Пише се в момента...</h3>
            )}
        </div >
    );
};;