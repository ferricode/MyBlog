export const Contacts = () => {
    return (
        <div className="col-md-10 col-lg-8 m-auto">
            <h6 className="title mb-2">Бял лист за теб:</h6>
            <p className="mb-5">Ако и ти имаш какво да споделиш...</p>
            <form action="" className="form-group">
                <input type="text" size="50" className="form-control" placeholder="Име" />
                <input type="email" className="form-control" placeholder="Email адрес" />
                <textarea name="comment" id="comment" rows="6" className="form-control"
                    placeholder="Място за твоето послание..."></textarea>
                <input type="submit" value="Изпрати" className="form-control" />
            </form>
        </div>
    );
};