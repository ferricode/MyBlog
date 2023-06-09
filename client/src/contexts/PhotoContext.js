import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { photoServiceFactory } from '../services/photoService';

const PhotoContext = createContext();

export const PhotoProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [photos, setPhotos] = useState([]);
    const photoService = photoServiceFactory();

    useEffect(() => {
        photoService.getAll()
            .then(result => {
                setPhotos(result);
            });
    }, []);

    const onCreatePhotoSubmit = async (data) => {
        try {
            const newPhoto = await photoService.create(data);

            setPhotos(state => [...state, newPhoto]);

            navigate('/photos');
        } catch (error) {
            console.log("Error on create photo!");
        }
    };

    const onEditPhotoSubmit = async (data) => {
        try {
            const result = await photoService.edit(data._id, data);

            setPhotos(state => state.map(x => x._id === data._id ? result : x));

            navigate('/photos');
        } catch (error) {
            console.log("Error on edit photo!");
        }
    };

    const deletePhoto = (photoId) => {
        setPhotos(state => state.filter(post => post._id !== photoId));
        navigate('/photos');
    };

    const getPhoto = (photoId) => {
        return photos.find(photo => photo._id === photoId);

    };
    const contextValues = {
        photos,
        onCreatePhotoSubmit,
        onEditPhotoSubmit,
        deletePhoto,
        getPhoto,
    };
    return (
        <PhotoContext.Provider value={contextValues}>
            {children}
        </PhotoContext.Provider>
    );


};
export const usePhotoContext = () => {
    const context = useContext(PhotoContext);
    return context;
};
