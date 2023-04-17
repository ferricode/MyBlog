import { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";

import { useForm } from '../../hooks/useForm';
import { photoServiceFactory } from '../../services/photoService';
import { usePhotoContext } from '../../contexts/PhotoContext';
import { AuthContext } from "../../contexts/AuthContext";


export const EditPhoto = () => {
    const { token } = useContext(AuthContext);

    const service = photoServiceFactory(token);
    const { photoId } = useParams();

    const { onEditPhotoSubmit } = usePhotoContext();

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        title: '',
        imageUrl: ''
    }, onEditPhotoSubmit);

    console.log(service.getOne(photoId));
    useEffect(() => {
        service.getOne(photoId)
            .then(result => {
                changeValues(result);
            });
    }, [photoId]);

    return (
        <div className="col-md-10 col-lg-8 m-auto">
            <form method="POST" className="form-group" onSubmit={onSubmit}>
                <h2 className="title mb-2">Редактиране на снимка:</h2>
                <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Заглавие:"
                    value={values.title}
                    onChange={changeHandler}
                />
                <input
                    row="10"
                    type="text"
                    name="imageUrl"
                    className="form-control"
                    placeholder="Съдържание:"
                    value={values.imageUrl}
                    onChange={changeHandler}
                />
                <input type="submit" className="form-control" value="Редактирай" />
            </form>
        </div >
    );
};
