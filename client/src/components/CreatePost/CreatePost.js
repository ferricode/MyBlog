import { useForm } from '../../hooks/useForm';
import { useRef, useState, useEffect } from 'react';
import { usePostContext } from '../../contexts/PostContext';

export const CreatePost = () => {
    const { onCreatePostSubmit } = usePostContext();
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        content: ''
    }, onCreatePostSubmit);

    const textRef = useRef();
    const [value, setValue] = useState();

    const changeHandlerSize = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        if (textRef && textRef.current) {
            textRef.current.style.height = "0px";
            const taHeight = textRef.current.scrollHeight;
            textRef.current.style.height = taHeight + "px";
        }
    }, [value]);

    return (
        <div className="col-md-10 col-lg-8 m-auto">
            <form method="POST" className="form-group" onSubmit={onSubmit}>
                <h2 className="title mb-2">Създаване на нов пост</h2>
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
                    name="content"
                    className="form-control"
                    placeholder="Съдържание:"
                    value={values.content}
                    onChange={changeHandler}
                    onFocus={changeHandlerSize}
                    ref={textRef}
                >
                </textarea>
                <input type="submit" className="form-control" value="Създай" />
            </form>
        </div >
    );
};
