import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/Common-features/ErrorPage';

import Home from './components/Home';
import AboutIndex from './components/About-us/AboutIndex';
import Career from './components/Career/Career';
import App from './components/App/App';
import Fables from './components/Fables/Fables';

function Routing() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/' element={< Home />} />
                    <Route exact  path='/AboutIndex' element={< AboutIndex/>} />
                    <Route exact  path='/Career' element={< Career/>} />
                    <Route exact  path='/App' element={< App/>} />
                    <Route exact  path='/Fables' element={< Fables/>} />

                    <Route path="*" element={<ErrorPage />} />
                </Routes>    
            </Router>
        </>
    )
}

export default Routing;
