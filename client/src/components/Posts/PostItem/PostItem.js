import { useContext, Fragment } from 'react';
import { Link } from "react-router-dom";

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
    const contentWithBreaks = content.toString().substring(0, 700).split(/\n/).flatMap((line, index) =>
        index > 0
            ? [<br key={`br-${index}`} />, <Fragment key={index}>{line}</Fragment>]
            : [line]
    );


    const onDeleteClick = async () => {

        const result = window.confirm(`Сигурни ли сте, че искате да изтриете '${title}'`);

        if (result) {
            try {
                await service.delete(_id);
                deletePost(_id);
            } catch (error) {
                console.log(error);
            }
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
                <p className="post-content">{contentWithBreaks}</p>
                <Link to={`/posts/${_id}/details`} className="card-link">
                    Още...
                </Link>
            </div>
        </div>
    );
};
