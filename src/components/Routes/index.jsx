import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import Header from '../Header';
import Footer from '../Footer';
import About from '../../pages/About';
import Apartment from '../../pages/Apartment';
import Error from '../Error';
import ErrorBoundary from '../ErrorBoundary';

export default function Router() {
    return <div>
        <BrowserRouter>
            <Header />
            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/about" element={ <About /> } />
                    <Route path="/apartment/:id" element={ <Apartment /> } />
                    <Route path="/error" element={ <Error /> } />
                    <Route path="*" element={ <Navigate to='/error' replace /> } />
                </Routes>
            </ErrorBoundary>
            <Footer />
        </BrowserRouter>
    </div >
}
