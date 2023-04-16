import { useState } from 'react';
import { Link } from "react-router-dom";

export const ThemeSelector = () => {
    const [theme, setTheme] = useState('light');

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <div className="theme-selector">
            <a href={void (0)} className="spinner">
                <i className="ti-paint-bucket"></i>
            </a>
            <div className="body">
                <Link to={void (0)} onClick={() => handleThemeChange('light')} className={`light ${theme === 'light' ? 'active' : ''}`}>
                </Link>
                <Link to={void (0)} onClick={() => handleThemeChange('dark')} className={`dark ${theme === 'dark' ? 'active' : ''}`}>
                </Link>
            </div>
        </div>
    );
};