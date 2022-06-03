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

import FablesDetails from './components/Fables-details/FablesDetails';
function Routing() {
    return (
        <>
            <Router>
            <ScrolltoTop />
            <Header/>
                <Routes>
                    <Route exact path='/' element={< Home />} />
                    <Route exact  path='/About-us' element={< AboutUs/>} />
                    <Route exact  path='/Career' element={< Career/>} />
                    <Route exact  path='/App' element={< App/>} />
                    <Route exact  path='/Fables' element={< Fables/>} />
                    <Route exact  path='/Contact' element={< Contact/>} />
                    <Route exact  path='/FAQ' element={<Faq/>} />                    
                    <Route exact  path='/Fables-Details' element={< FablesDetails/>} />
                    <Route exact  path='/Services' element={< Services/>} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>    
            </Router>
        </>
    )
}

export default Routing;
