import { Photos } from './Photos';
import { Diary } from './Diary';

export const Home = () => {
    return (
        <div className="container page-container">
            <Photos />
            <Diary />
        </div >
    );
};