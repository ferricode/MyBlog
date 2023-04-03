import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';

import { AuthContext } from '../../contexts/AuthContext';

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit);
    return (
        <div className="col-md-10 col-lg-4 m-auto">
            <form method="POST" className="form-group" onSubmit={onSubmit}>
                <h2 className="title mb-2">Вписване</h2>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email адрес"
                    value={values.email}
                    onChange={changeHandler}
                />
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Парола"
                    value={values.password}
                    onChange={changeHandler}
                />
                <input type="submit" className="form-control" value="Вписване" />
            </form>
        </div >
    );
};