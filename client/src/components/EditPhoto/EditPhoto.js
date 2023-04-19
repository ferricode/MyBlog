import { useEffect, useContext, useState } from 'react';
import { useParams } from "react-router-dom";

import { useForm } from '../../hooks/useForm';
import { photoServiceFactory } from '../../services/photoService';
import { usePhotoContext } from '../../contexts/PhotoContext';
import { AuthContext } from "../../contexts/AuthContext";
import { validatePhoto } from '../../utils/validations';

export const EditPhoto = () => {
    const { token } = useContext(AuthContext);

    const service = photoServiceFactory(token);
    const { photoId } = useParams();

    const { onEditPhotoSubmit } = usePhotoContext();

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        title: '',
        imageUrl: ''
    }, onEditPhotoSubmit);

    const [isValid, setIsValid] = useState(true);

    const [errors, setErrors] = useState({
        title: "",
        imageUrl: "",
    });

    const validate = () => {
        const newErrors = validatePhoto(values);
        setErrors(newErrors);
        const isValid = Object.values(newErrors).every((error) => error === "");
        setIsValid(isValid); // update isValid state variable
    };


    const onBlurHandler = (event) => {
        validate();
    };
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
                    onBlur={onBlurHandler}
                    onChange={changeHandler}
                />
                {errors.title && <p className="text-danger">{errors.title}</p>}
                <input
                    row="10"
                    type="text"
                    name="imageUrl"
                    className="form-control"
                    placeholder="Съдържание:"
                    value={values.imageUrl}
                    onBlur={onBlurHandler}
                    onChange={changeHandler}
                />
                {errors.imageUrl && <p className="text-danger">{errors.imageUrl}</p>}
                <input type="submit" className="form-control" value="Редактирай" disabled={!isValid} />
            </form>
        </div >
    );
};
