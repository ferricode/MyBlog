import { usePhotoContext } from "../../contexts/PhotoContext";
import { Link } from 'react-router-dom';
import { PhotoItem } from "./PhotoItem/PhotoItem";

export const Photos = () => {
    const { photos } = usePhotoContext();

    return (
        <div className="page-container">
            <h1 className="title">Снимкария:</h1>
            <br />
            <div className="col-md-10 col-lg-4 m-auto">
                <Link to="/create-photo" className="nav-link"><input type="submit" className="form-control" value="Качи снимка:" /></Link>
            </div>
            <br />
            <div className="row mb-4">
                {photos.map(x =>
                    <PhotoItem key={x._id} {...x} />
                )}
            </div>
            {photos.length === 0 && (
                <h3 className="no-articles">Все още няма качени снимки...</h3>
            )}
        </div >
    );
};