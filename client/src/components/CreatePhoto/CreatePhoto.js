import { useForm } from '../../hooks/useForm';
import { usePhotoContext } from '../../contexts/PhotoContext';

export const CreatePhoto = () => {
    const { onCreatePhotoSubmit } = usePhotoContext();
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        imageUrl: ''
    }, onCreatePhotoSubmit);

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
                />
                <textarea
                    row="10"
                    type="text"
                    name="imageUrl"
                    className="form-control"
                    placeholder="Линк към снимка...:"
                    value={values.imageUrl}
                    onChange={changeHandler}
                >
                </textarea>
                <input type="submit" className="form-control" value="Създай" />
            </form>
        </div >
    );
};
