import { useContext } from 'react';
import { Link } from "react-router-dom";

import { usePhotoContext } from '../../../contexts/PhotoContext';
import { BsTrash, BsPencil } from 'react-icons/bs';

import { photoServiceFactory } from '../../../services/photoService';
import { AuthContext } from "../../../contexts/AuthContext";

export const PhotoItem = ({
    _id,
    title,
    imageUrl,
}) => {

    const { token } = useContext(AuthContext);
    const { deletePhoto } = usePhotoContext();
    const service = photoServiceFactory(token);

    const onDeleteClick = async () => {

        const result = window.confirm(`Сигурни ли сте, че искате да изтриете '${title}'`);

        if (result) {
            try {
                await service.delete(_id);
                deletePhoto(_id);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="card post-item">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <img src={imageUrl} alt={title} style={{ maxWidth: "500px", maxHeight: "500px" }} />
                <br />
                <br />
                <Link to={`/photos/${_id}/details`} className="card-link">
                    Детайли...
                </Link>
            </div>
        </div>
    );
};
