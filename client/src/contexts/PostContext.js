import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { postServiceFactory } from '../services/postService';

const PostContext = createContext();

export const PostProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const postService = postServiceFactory();

    useEffect(() => {
        postService.getAll()
            .then(result => {
                setPosts(result);
            });
    }, []);

    const onCreatePostSubmit = async (data) => {
        const newPost = await postService.create(data);

        setPosts(state => [...state, newPost]);

        navigate('/posts');
    };

    const onEditPostSubmit = async (data) => {
        const result = await postService.edit(data._id, data);

        setPosts(state => state.map(x => x._id === data._id ? result : x));

        navigate('/posts');
    };

    const deletePost = (postId) => {
        setPosts(state => state.filter(post => post._id !== postId));
        navigate('/posts');
    };

    const getPost = (postId) => {
        return posts.find(post => post._id === postId);

    };
    const contextValues = {
        posts,
        onCreatePostSubmit,
        onEditPostSubmit,
        deletePost,
        getPost,
    };
    return (
        <PostContext.Provider value={contextValues}>
            {children}
        </PostContext.Provider>
    );


}; export const usePostContext = () => {
    const context = useContext(PostContext);
    return context;
};
