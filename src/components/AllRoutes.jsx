import {Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import PrivateRoute from './PrivateRoute';

export default function AllRoutes(){
    return(
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>} />
            <Route path='/productDetails' element={
                <PrivateRoute>
                    <ProductDetails />
                </PrivateRoute>} />
        </Routes>
    )
}