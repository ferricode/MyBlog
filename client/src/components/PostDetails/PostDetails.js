import { useEffect, useContext, useState } from 'react';
import { useParams } from "react-router-dom";

import { postServiceFactory } from '../../services/postService';
import { AuthContext } from "../../contexts/AuthContext";

export const PostDetails = () => {
    const { token } = useContext(AuthContext);
    const service = postServiceFactory(token);
    const [value, setValue] = useState();
    const { postId } = useParams();

    useEffect(() => {
        service.getOne(postId)
            .then(result => {
                setValue(result);
            });
    }, [postId]);


    return (
        <div className="card post-item">
            <div className="card-body">
                <h2 className="card-title">{value.title}</h2>
                <p className="post-content">{value.content}</p>
                <button className="btn details-btn" >Like</button>
            </div>
        </div>
    );
};

//TODO: onClick={() => onLikeClick(_id)}