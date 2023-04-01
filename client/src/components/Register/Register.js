
export const Register = () => {
    return (
        <div className="col-md-10 col-lg-4 m-auto">
            <form className="form-group">
                <h2 className="title mb-2">Регистрация</h2>
                <input type="text" size="50" className="form-control" placeholder="Email адрес..." />
                <input type="password" name="password" className="form-control" placeholder="Парола..." />
                <input type="password" name="repeatPassword" className="form-control" placeholder="Повтори паролата..." />
                <input type="submit" className="form-control" value="Регистрирай се" />
            </form>
        </div>
    );
};