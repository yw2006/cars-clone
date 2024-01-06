import React from 'react'
import "./main.css";
import g1 from './images/g1.png'
import g2 from './images/g2.png'
import g3 from './images/g3.png'
function Whoarewe() {
  return (
    <div className='bg-primary mt-5 row whyus w-100 m-auto h-100'>
      <div className='col-3 col-sm-12 m-5 m-auto w-100 text-center'>
        <h1 className='text-white header'>Who are we?</h1>
        <p className='text-white'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</p>
      </div>
      <div className='col-md-8 m-3 m-auto ml-3 w-75 text-center'>
        <img src={g1} className='col-md-3 col-sm-12 m-3' alt="" />
        <img src={g2} className='col-md-3 col-sm-12 m-3' alt="" />
        <img src={g3} className='col-md-3 col-sm-12 m-3' alt="" />
      </div>
    </div>
  )
}

export default Whoarewe
// import React from 'react'
// import '../App.css'
// import g1 from '../images/g1.png'
// import g2 from '../images/g2.png'
// import g3 from '../images/g3.png'
// function Whoarewe() {
//   return (
//     <div className='bg-primary mt-5 row whyus w-100 m-auto h-100'>
//       <div className='col-3 col-sm-12 m-5 m-auto w-25'>
//         <h1 className='text-white header'>Who are we?</h1>
//         <p className='text-white'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</p>
//       </div>
//       <div className='col-md-8 m-3 m-auto ml-3 w-75 text-center'>
//         <img src={g1} className='col-md-3 col-sm-12 m-3' alt="" />
//         <img src={g2} className='col-md-3 col-sm-12 m-3' alt="" />
//         <img src={g3} className='col-md-3 col-sm-12 m-3' alt="" />
//       </div>
//     </div>
//   )
// }

// export default Whoarewe