import React from 'react'
import "./main.css";
function Whoarewe() {
  const g1 = 'https://i.ibb.co/P5CQLd8/g1.png';
  const g2 = 'https://i.ibb.co/1XmnL7J/g2.png';
  const g3 = 'https://i.ibb.co/2v7X0yS/g3.png';
  return (
    <div className='bg-primary mt-5 row g-3 whyus w-100 m-auto h-75 mb-5 mt-4'>
      <div className='col-3 col-sm-12 m-3 m-auto w-100 text-center'>
        <h1 className='text-white header'>Who are we?</h1>
        <p className='text-white'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</p>
      </div>
      <div className='col-md-8 m-auto w-100 text-center'>
        <img src={g1} className='col-md-3 col-sm-12 m-2' alt="G1" />
        <img src={g2} className='col-md-3 col-sm-12 m-2' alt="G2" />
        <img src={g3} className='col-md-3 col-sm-12 m-2' alt="G3" />
      </div>
    </div>
  )
}

export default Whoarewe