import { useEffect, useContext, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { BsTrash, BsPencil } from 'react-icons/bs';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

import { usePhotoContext } from '../../contexts/PhotoContext';

import { photoServiceFactory } from '../../services/photoService';
import { AuthContext } from "../../contexts/AuthContext";

export const PhotoDetails = () => {
    const { token, userId } = useContext(AuthContext);
    const { photoId } = useParams();
    const service = photoServiceFactory(token);
    const { deletePhoto } = usePhotoContext();

    const [photo, setPhoto] = useState({});


    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    };

    useEffect(() => {
        service.getOne(photoId).then(data => {
            setPhoto(data);
        }).catch(error => console.log(error));

    }, [photoId]);

    const isOwner = photo._ownerId === userId;

    const onDeleteClick = async () => {

        const result = window.confirm(`Сигурни ли сте, че искате да изтриете '${photo.title}'`);

        if (result) {
            try {
                await service.delete(photo._id);
                deletePhoto(photo._id);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <div className="card-icons d-flex justify-content-center">
                {isOwner && (<>
                    <Link to={`/photos/${photo._id}/edit`} className="card-link me-2">
                        <BsPencil className="icon-lg" />
                    </Link>
                    <Link to={void (0)} className="card-link">
                        <BsTrash onClick={onDeleteClick} className="icon-lg" />
                    </Link>
                </>)}
            </div>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h2 className="card-title text-center title">{photo.title}</h2>
                <img src={photo.imageUrl} alt={photo.title} className="image-margins" />
                <div onClick={handleClick}>
                    {liked ? (
                        <FcLike className="icon-lg" title="Like" />
                    ) : (
                        <FcLikePlaceholder className="icon-lg" title="Like" />
                    )}
                </div>
            </div >
        </>

    );
};

//TODO: onClick={() => onLikeClick(_id)} 