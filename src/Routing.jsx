import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ErrorPage from './common-components/ErrorPage';
import Home from './components/Home';
import AboutIndex from './components/About-us/AboutIndex';
function Routing() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/' element={< Home />} />

                    <Route exact path='/AboutIndex' element={< AboutIndex />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routing;
