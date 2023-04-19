import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { usePhotoContext } from '../../contexts/PhotoContext';
import { validatePhoto } from '../../utils/validations';

export const CreatePhoto = () => {
    const { onCreatePhotoSubmit } = usePhotoContext();
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        imageUrl: ''
    }, onCreatePhotoSubmit);

    const [errors, setErrors] = useState({
        title: "",
        imageUrl: "",
    });

    const validate = () => {
        const newErrors = validatePhoto(values);
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const onBlurHandler = (event) => {
        validate();
    };

    return (
        <div className="col-md-10 col-lg-8 m-auto">
            <form method="POST" className="form-group" onSubmit={onSubmit}>
                <h2 className="title mb-2">Публикувай нова снимка</h2>
                <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Заглавие:"
                    value={values.title}
                    onChange={changeHandler}
                    onBlur={onBlurHandler}
                />
                {errors.title && <p className="text-danger">{errors.title}</p>}
                <textarea
                    row="10"
                    type="text"
                    name="imageUrl"
                    className="form-control"
                    placeholder="Линк към снимка...:"
                    value={values.imageUrl}
                    onChange={changeHandler}
                    onBlur={onBlurHandler}
                >
                </textarea>
                {errors.imageUrl && <p className="text-danger">{errors.imageUrl}</p>}
                <input type="submit" className="form-control" value="Създай" disabled={Object.values(errors).some((error) => error !== "")} />
            </form>
        </div >
    );
};
