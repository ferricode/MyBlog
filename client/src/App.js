import { Routes } from 'react-router-dom';

import { Navbar } from '../src/components/Navbar';
import { ThemePainting } from './components/ThemeSelector';
import { Header } from '../src/components/Header';
import { Modalbox } from './components/Modalbox';
import { Photos } from './components/Photos';
import { Diary } from './components/Diary';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <ThemePainting />
      <Header />
      <Modalbox />
      <div className="container page-container">
        <Photos />
        <Diary />
      </div >
      <div className="contact-section">
        <div className="overlay"></div>
        <div className="container">
          <Contacts />
          <Footer />
        </div>
      </div>;
    </>

  );
}

export default App;
