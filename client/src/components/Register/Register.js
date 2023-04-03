import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        userName: '',
        email: '',
        password: '',
        repeatPassword: ''
    }, onRegisterSubmit);

    return (
        <div className="col-md-10 col-lg-4 m-auto">
            <form method="POST" className="form-group" onSubmit={onSubmit}>
                <h2 className="title mb-2">Регистрация</h2>
                <input
                    type="text"
                    name="userName"
                    className="form-control"
                    placeholder="Потребителско име"
                    value={values.userName}
                    onChange={changeHandler} />
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email адрес"
                    value={values.email}
                    onChange={changeHandler} />
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Парола"
                    value={values.password}
                    onChange={changeHandler} />
                <input
                    type="password"
                    name="repeatPassword"
                    className="form-control"
                    placeholder="Повтори паролата"
                    value={values.repeatPassword}
                    onChange={changeHandler} />
                <input type="submit" className="form-control" value="Регистрирай се" />
            </form>
        </div>
    );
};