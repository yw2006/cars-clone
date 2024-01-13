import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './components/Login';
import Signup from './components/Signup';
import Booknow from './components/Booknow';
import BookingForm from './components/Bookingform';
import Checkout from './components/Checkout';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/booknow/:id' element={<Booknow />} />
      <Route path='/bookingform/:id' element={<BookingForm />} />
      <Route path='/checkout/:id' element={<Checkout />} />

    </Routes>
  );

}

export default App