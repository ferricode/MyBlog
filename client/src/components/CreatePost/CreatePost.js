import { useForm } from '../../hooks/useForm';
import { useRef, useState, useEffect } from 'react';
import { usePostContext } from '../../contexts/PostContext';
import { validatePost } from '../../utils/validations';

export const CreatePost = () => {
    const { onCreatePostSubmit } = usePostContext();
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        content: ''
    }, onCreatePostSubmit);

    const [errors, setErrors] = useState({
        title: "",
        content: "",
    });

    const textRef = useRef();
    const [value, setValue] = useState();

    const onFocusHandlerSize = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        if (textRef && textRef.current) {
            textRef.current.style.height = "0px";
            const taHeight = textRef.current.scrollHeight;
            textRef.current.style.height = taHeight + "px";
        }
        validate();
    }, [value]);

    const [isValid, setIsValid] = useState(false);

    const validate = () => {
        const newErrors = validatePost(values);
        setErrors(newErrors);
        const isValid = Object.values(newErrors).every((error) => error === "");
        setIsValid(isValid); // update isValid state variable
    };

    const onBlurHandler = (event) => {
        validate();
    };

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
                    onBlur={onBlurHandler}
                />
                {errors.title && <p className="text-danger">{errors.title}</p>}
                <textarea
                    row="10"
                    type="text"
                    name="content"
                    className="form-control"
                    placeholder="Съдържание:"
                    value={values.content}
                    onChange={changeHandler}
                    onFocus={onFocusHandlerSize}
                    onBlur={onBlurHandler}
                    ref={textRef}
                ></textarea>
                {errors.content && <p className="text-danger">{errors.content}</p>}
                <input type="submit" className="form-control" value="Създай" disabled={!isValid} />
            </form>
        </div>
    );
};