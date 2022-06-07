import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrolltoTop from './components/Common-features/ScrolltoTop';
import ErrorPage from './components/Common-features/ErrorPage';

const LazyHome = React.lazy(() => import('./components/home-page/Home'));
// import Home from './components/Home';

const LazyAbout = React.lazy(() => import('./components/About-us/AboutUs'));
// import AboutUs from './components/About-us/AboutUs';

const LazyCareer = React.lazy(() => import('./components/Career/Career'));
// import Career from './components/Career/Career';

const LazyApp = React.lazy(() => import('./components/App/App'));
// import App from './components/App/App';

const LazyFables = React.lazy(() => import('./components/Fables/Fables'));
// import Fables from './components/Fables/Fables';

const LazyContact = React.lazy(() => import('./components/Contact/Contact'));
// import Contact from './components/Contact/Contact';

function Routing() {
    return (
        <>
            <Router>
            <ScrolltoTop />
            <Header/>
                <Routes>
                <Route exact path='/' element={
                        <React.Suspense fallback='Loading...'>
                            < LazyHome />
                        </React.Suspense>} />
                    {/* <Route exact path='/' element={< Home />} /> */}
                    
                    <Route exact path='/About-us' element={
                        <React.Suspense fallback='About...'>
                            < LazyAbout />
                        </React.Suspense>
                    } />

                        <Route exact path='/Career' element={
                        <React.Suspense fallback='Career...'>
                            < LazyCareer />
                        </React.Suspense>} />

                           <Route exact path='/App' element={
                        <React.Suspense fallback='App...'>
                            < LazyApp />
                        </React.Suspense>
                    } />

                        <Route exact path='/Fables' element={
                        <React.Suspense fallback='Fables...'>
                            < LazyFables />
                        </React.Suspense>
                    } />

                      <Route exact path='/Contact' element={
                        <React.Suspense fallback='Contact...'>
                            < LazyContact />
                        </React.Suspense>
                    } />

                    <Route path="*" element={<ErrorPage />} />
                </Routes>    
            </Router>
        </>
    )
}

export default Routing;
