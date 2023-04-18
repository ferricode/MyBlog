import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/photos';


export const photoServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        try {
            const result = await request.get(baseUrl);
            const photos = Object.values(result);
            return photos;
        } catch (error) {
            console.log("Error on get all photos!");
        }

    };

    const getOne = async (photoId) => {
        try {
            const result = await request.get(`${baseUrl}/${photoId}`);

            return result;

        } catch (error) {
            console.log("Error on getting photo!");
        }
    };
    const create = async (data) => {
        try {
            const result = await request.post(baseUrl, data);

            return result;
        } catch (error) {
            console.log("Error on creating photo!");
        }
    };
    const edit = (photoId, data) => request.put(`${baseUrl}/${photoId}`, data);

    const deletePhoto = (photoId) => request.delete(`${baseUrl}/${photoId}`);

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deletePhoto
    };

};


