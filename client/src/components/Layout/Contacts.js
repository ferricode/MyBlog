export const Contacts = () => {
    return (
        <div className="col-md-10 col-lg-8 m-auto">
            <h6 className="title mb-2">Бял лист за теб:</h6>
            <p className="mb-5">Ако и ти имаш какво да споделиш...</p>
            <form action="" className="form-group">
                <input type="text" size="50" className="form-control" placeholder="Име" required />
                <input type="email" className="form-control" placeholder="Email адрес" requried />
                <textarea name="comment" id="comment" rows="6" className="form-control"
                    placeholder="Място за твоето послание..."></textarea>
                <button type="submit" value="Send Message" className="form-control">Изпрати</button>
            </form>
        </div>
    );
};