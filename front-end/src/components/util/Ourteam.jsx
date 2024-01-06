import React from 'react'
import './main.css'
import personone from './images/person1.png'
import persontwo from './images/person2.png'
import personthree from './images/person3.png'
import personfour from './images/person4.png'
import personfive from './images/person5.png'
function Ourteam() {
    return (
        <div className='bg-white mt-5'>
            <div className='row w-100'>
                <h1 className='head text-center col text-dark'>Our Team</h1>
            </div>
            <div className='row m-auto containter mt-4'>
                <div className='col-md-2 bg-light text-center m-2 ml-3 cards m-auto'>
                    <h5 className='mt-4'>Courtney Henry</h5>
                    <p>Development Manager</p>
                    <img src={personone} className='w-100' alt="" />
                </div>
                <div className='col-md-2 text-center m-2 ml-3 cards m-auto card2'>
                    <h5 className='mt-4'>Jerome Bell</h5>
                    <p>Software Developer</p>
                    <img src={persontwo} className='w-100' alt="" />
                </div>
                <div className='col-md-2 text-center m-2 ml-3 cards m-auto card3'>
                    <h5 className='mt-4'>Jerome Bell</h5>
                    <p>Software Tester</p>
                    <img src={personthree} className='w-100 img3' alt="" />
                </div>
                <div className='col-md-2 card4 text-center m-2 ml-3 cards m-auto'>
                    <h5 className='mt-4'>Arlene McCoy</h5>
                    <p>Software Developer</p>
                    <img src={personfour} className='w-100 img3' alt="" />
                </div>
                <div className='col-md-2 card5 text-center m-2 ml-3 cards m-auto'>
                    <h5 className='mt-4'>Jenny Wilson</h5>
                    <p>UI/UX Designer</p>
                    <img src={personfive} className='w-100' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Ourteam