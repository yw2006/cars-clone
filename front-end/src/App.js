import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './components/Login';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details/:id' element={<Details/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  );

}

export default App