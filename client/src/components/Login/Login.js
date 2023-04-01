
export const Login = () => {
    return (
        <div className="col-md-10 col-lg-4 m-auto">
            <form className="form-group">
                <h2 className="title mb-2">Вписване</h2>
                <input type="text" size="50" className="form-control" placeholder="Email адрес" />
                <input type="password" name="password" className="form-control" placeholder="Парола" />
                <button type="submit" className="form-control">Вписване</button>
            </form>
        </div>
    );
};