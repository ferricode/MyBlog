import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";

import '../Posts.css';
import { usePostContext } from '../../../contexts/PostContext';
import { BsTrash, BsPencil } from 'react-icons/bs';

import { postServiceFactory } from '../../../services/postService';
import { AuthContext } from "../../../contexts/AuthContext";

export const PostItem = ({
    _id,
    title,
    content,
}) => {

    const { token } = useContext(AuthContext);
    const { deletePost } = usePostContext();
    const service = postServiceFactory(token);

    const navigate = useNavigate();

    const onDeleteClick = async () => {

        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Сигурни ли сте,ч е искате да изтриете '${title}'`);

        if (result) {
            await service.delete(_id);
            deletePost(_id);

            navigate('/posts');
        }
    };

    return (
        <div className="card post-item">
            <div className="card-body">
                <div className="card-icons d-flex justify-content-end">
                    <Link to={`/posts/${_id}/edit`} className="card-link me-2">
                        <BsPencil />
                    </Link>
                    <Link to={`/posts/${_id}/delete`} className="card-link">
                        <BsTrash onClick={onDeleteClick} />
                    </Link>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className="post-content">{content}</p>
                <Link to={`/posts/${_id}`} className="card-link">
                    Read More
                </Link>
            </div>
        </div>
    );
};
