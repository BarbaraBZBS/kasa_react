import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import Header from '../Header';
import Footer from '../Footer';
import About from '../../pages/About';
import Apartment from '../../pages/Apartment';
import Error from '../Error';

export default function Router() {
    return <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/apartment" element={ <Apartment /> } />
                <Route path="*" element={ <Error /> } />
            </Routes>
            <Footer />
        </BrowserRouter>

    </div>
}
