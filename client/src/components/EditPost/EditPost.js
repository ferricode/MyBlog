import { useRef, useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";

import { useForm } from '../../hooks/useForm';
import { postServiceFactory } from '../../services/postService';
import { usePostContext } from '../../contexts/PostContext';
import { AuthContext } from "../../contexts/AuthContext";


export const EditPost = () => {
    const { token } = useContext(AuthContext);

    const service = postServiceFactory(token);
    const { postId } = useParams();

    const { onEditPostSubmit } = usePostContext();

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        title: '',
        content: ''
    }, onEditPostSubmit);


    const textRef = useRef();
    const [value, setValue] = useState();

    const changeHandlerSize = (e) => {
        setValue(e.target.value);
    };
    useEffect(() => {
        service.getOne(postId)
            .then(result => {
                changeValues(result);
            });
        if (textRef && textRef.current) {
            textRef.current.style.height = "0px";
            const taHeight = textRef.current.scrollHeight;
            textRef.current.style.height = taHeight + "px";
        }
    }, [postId, value]);

    return (
        <div className="col-md-10 col-lg-8 m-auto">
            <form method="POST" className="form-group" onSubmit={onSubmit}>
                <h2 className="title mb-2">Редактиране:</h2>
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
                    //onChange={(e) => { changeHandler(e); changeHandlerSize(e); }}
                    onFocus={changeHandlerSize}
                    ref={textRef}
                >
                </textarea>
                <input type="submit" className="form-control" value="Редактирай" />
            </form>
        </div >
    );
};
