import { PhotosPreview } from './PhotosPreview';
import { PostsPreview } from './PostsPreview';

export const Home = () => {
    return (
        <div className="container page-container">
            <PhotosPreview />
            <PostsPreview />
        </div >
    );
};