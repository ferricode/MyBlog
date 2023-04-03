import { Link, Outlet } from 'react-router-dom';

import { Navbar } from './Navbar';
import { ThemeSelector } from './ThemeSelector';
import { Header } from './Header';
import { Modalbox } from './Modalbox';
import { Contacts } from './Contacts';
import { Footer } from './Footer';

export const Layout = () => {
    return (
        <>
            <Navbar />
            <ThemeSelector />
            <Header />
            <Modalbox />
            <Link to='/'></Link>
            <Outlet />
            <div className="contact-section">
                <div className="overlay"></div>
                <div className="container">
                    <Contacts />
                    <Footer />
                </div>
            </div>
        </>
    );

};