import { Link } from "react-router-dom";
import '../Posts.css';

import { BsTrash, BsPencil } from 'react-icons/bs';

export const PostItem = ({
    _id,
    title,
    content,
}) => {
    const formatedContent = content.split("\n").map((line, i) => (
        <span key={i}>
            {line}
            <br />
        </span>
    ));

    return (
        <div className="card post-item">
            <div className="card-body">
                <div className="card-icons d-flex justify-content-end">
                    <Link to={`/posts/${_id}/edit`} className="card-link me-2">
                        <BsPencil />
                    </Link>
                    <Link to={`/posts/${_id}/delete`} className="card-link">
                        <BsTrash />
                    </Link>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className="post-content">{formatedContent}</p>
                <Link to={`/posts/${_id}`} className="card-link">
                    Read More
                </Link>
            </div>
        </div>
    );
};
