import { useForm } from '../../hooks/useForm';
import { usePostContext } from '../../contexts/PostContext';

export const CreatePost = () => {
    const { onCreatePostSubmit } = usePostContext();
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        content: ''
    }, onCreatePostSubmit);
    return (
        <div className="col-md-10 col-lg-4 m-auto">
            <form method="POST" className="form-group" onSubmit={onSubmit}>
                <h2 className="title mb-2">Създаване на нов пост</h2>
                <label>Заглавие:</label>
                <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={values.email}
                    onChange={changeHandler}
                />
                <label>Съдържание:</label>
                <input
                    type="content"
                    name="content"
                    className="form-control"
                    value={values.content}
                    onChange={changeHandler}
                />
                <input type="submit" className="form-control" value="Създай" />
            </form>
        </div >
    );
};