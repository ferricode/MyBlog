
export const PostDetails = ({
    title,
    content,
}) => {
    return (
        <div className="card post-item">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="post-content">{content}</p>
                <button className="btn details-btn" >Like</button>
            </div>
        </div>
    );
};

//TODO: onClick={() => onLikeClick(_id)}