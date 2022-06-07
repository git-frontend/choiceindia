import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/Common-features/ErrorPage';

import Home from './components/home-page/Home';
import AboutUs from './components/About-us/AboutUs';
import Career from './components/Career/Career';
import App from './components/App/App';
import Fables from './components/Fables/Fables';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import ScrolltoTop from './components/Common-features/ScrolltoTop';
import Faq from './components/FAQ/Faq';
// import Header from './components/Common-features/MenuHeader';
import Header from './components/Contact/ContactHeader';
import Footer from './components/Common-features/Footer';

import FablesDetails from './components/Fables-details/FablesDetails';
function Routing() {
    return (
        <>
            <Router>
            <ScrolltoTop />
            <Header/>
                <Routes>
                    <Route exact path='/' element={< Home />} />
                    <Route exact  path='/about-us' element={< AboutUs/>} />
                    <Route exact  path='/career' element={< Career/>} />
                    <Route exact  path='/app' element={< App/>} />
                    <Route exact  path='/fables' element={< Fables/>} />
                    <Route exact  path='/contact' element={< Contact/>} />
                    <Route exact  path='/faq' element={<Faq/>} />                    
                    <Route exact  path='/fables-details' element={< FablesDetails/>} />
                    <Route exact  path='/services' element={< Services/>} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes> 
                <Footer/>   
            </Router>
        </>
    )
}

export default Routing;
