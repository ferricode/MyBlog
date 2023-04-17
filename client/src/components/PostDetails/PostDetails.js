import { useEffect, useContext, useState, Fragment } from 'react';
import { useParams } from "react-router-dom";

import { postServiceFactory } from '../../services/postService';
import { AuthContext } from "../../contexts/AuthContext";

export const PostDetails = () => {
    const { token } = useContext(AuthContext);
    const { postId } = useParams();
    const service = postServiceFactory(token);

    const [post, setPost] = useState({});

    useEffect(() => {
        service.getOne(postId).then(data => {
            setPost(data);
        }).catch(error => console.log(error));

    }, [postId]);

    let contentWithBreaks = null;
    if (post.content) {
        contentWithBreaks = post.content.toString().split(/\n/).flatMap((line, index) =>
            index > 0
                ? [<br key={`br-${index}`} />, <Fragment key={index}>{line}</Fragment>]
                : [line]
        );
    }


    return (
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h2 className="card-title text-center title">{post.title}</h2>
            <p className="post-content text-center">{contentWithBreaks}</p>
            <button className="btn details-btn">Like</button>
        </div>
    );
};

//TODO: onClick={() => onLikeClick(_id)}