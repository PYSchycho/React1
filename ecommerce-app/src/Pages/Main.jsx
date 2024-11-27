import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../Routes/PrivateRoute';
import Home from './Home';
import Login from './Login';
import About from './About';
import categories from './categories';
import Jewellery from '../categories/jewellery';
import Electronics from '../categories/Electronics';
import MensClothing from '../categories/Mens';
import WomensClothingPage from '../categories/Womens';
import cart from './cart';
import Address from './Address';
import Payment from './Payment';
import Logout from './Logout';
import PaymentsSuccess from '../component/Payments-success';
const Main = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
      }}>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/payments-success" element={<PrivateRoute Component={PaymentsSuccess} />} />
        <Route index path="/" element={<PrivateRoute Component={Home} />} />
        <Route path="/about" element={<PrivateRoute Component={About} />} />
        <Route path="/categories" element={<PrivateRoute Component={categories} />} />
        <Route path="/jewellery" element={<PrivateRoute Component={Jewellery}/>}/>
        <Route path="/electronics" element={<PrivateRoute Component={Electronics}/>}/>
        <Route path="/address" element={<PrivateRoute Component={Address}/>}/>
        <Route path="/payment" element={<PrivateRoute Component={Payment}/>}/>
        <Route path="/mens" element={<PrivateRoute Component={MensClothing}/>}/>
        <Route path="/womens" element={<PrivateRoute Component={WomensClothingPage}/>}/>
        <Route path="/cart" element={<PrivateRoute Component={cart} />} />
        <Route path="/logout" element={<PrivateRoute Component={Logout} />} />
      </Routes>
    </BrowserRouter>
  )
};
export default Main;