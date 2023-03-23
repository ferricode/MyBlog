import { Navbar } from '../src/components/Navbar';
import { ThemePainting } from '../src/components/ThemePainting';
import { Header } from '../src/components/Header';
import { Modalbox } from './components/Modalbox';
import { Photos } from './components/Photos';
import { Diary } from './components/Diary';
import { Email } from './components/Email';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <ThemePainting />
      <Header />
      <Modalbox />
      <div className="container page-container">
        <Photos />
        <Diary />
      </div >
      {/* <!-- end of page container --> */};

      {/* <!--footer & pre footer --> */}
      <div className="contact-section">
        <div className="overlay"></div>
        {/* <!-- container --> */}
        <div className="container">
          <Email />
          {/* <!-- footer --> */}
          <Footer />
          {/* <!-- end of footer --> */}

        </div>
        {/* <!-- end of container --> */}
      </div>;
      {/* <!-- end of pre footer --> */}
    </div >

  );
}

export default App;
