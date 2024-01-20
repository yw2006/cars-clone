import React from 'react'
import { Route, Routes,Navigate,Outlet } from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './components/Login';
import Signup from './components/Signup';
import Booknow from './components/Booknow';
import BookingForm from './components/Bookingform';
import Checkout from './components/Checkout';
import AllProducts from './components/products/AllProducts';
import Search from './components/Search';
const Protect = ()=>{
  if (localStorage.getItem('token'))return <Outlet />;
  return <Navigate to="/signin"/>
} 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<Protect/>}>
        <Route path="/booknow/:id" element={<Booknow />} />
        <Route path="/bookingform/:id" element={<BookingForm />} />
        .
        <Route path="/checkout/:id/:order_id" element={<Checkout />} />
      </Route>
      <Route path="/AllProducts" element={<AllProducts />} />
      <Route path="/search/:model/:price" element={<Search />} />
      <Route elemen={<>
      </>}/>
    </Routes>
  );

}

export default App