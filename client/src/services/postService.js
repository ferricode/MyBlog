import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/posts';


export const postServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        try {
            const result = await request.get(baseUrl);
            const posts = Object.values(result);
            return posts;
        } catch (error) {

            console.log("Error on getting posts!");
        }
    };


    const getOne = async (postId) => {
        try {
            const result = await request.get(`${baseUrl}/${postId}`);

            return result;
        } catch (error) {
            console.log("Error on getting post!");
        }
    };
    const create = async (data) => {
        try {
            const result = await request.post(baseUrl, data);
            return result;
        } catch (error) {
            console.log("Error on creating post!");
        }
    };
    const edit = (postId, data) => request.put(`${baseUrl}/${postId}`, data);

    const deletePost = (postId) => request.delete(`${baseUrl}/${postId}`);

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deletePost
    };

};


