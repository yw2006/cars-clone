import React from 'react'
import './main.css'
function Ourteam() {
    const personone = 'https://i.ibb.co/XkbzYrm/person1.jpg';
    const persontwo = 'https://i.ibb.co/KqD0jLH/person2.jpg';
    const personthree = 'https://i.ibb.co/gr5WwXw/person3.jpg';
    const personfour = 'https://i.ibb.co/MgVNMsD/person4.png';
    const personfive = 'https://i.ibb.co/7rcYLZs/person4.jpg';
    return (
        <div className='bg-white mt-5'>
            <div className='row w-100'>
                <h1 className='head text-center col text-dark'>Our Team</h1>
            </div>
            <div className='row m-auto containter mt-4'>
                <div className='col-md-2 bg-light text-center m-2 ml-3 cards m-auto'>
                    <h5 className='mt-4'>Yousef Walid</h5>
                    <p>Web Developer</p>
                    <img src={personone} className='w-100 img3' alt="person one" />
                </div>
                <div className='col-md-2 text-center m-2 ml-3 cards m-auto card2 mt-3'>
                    <h5 className='mt-4'>Seif Ahmed</h5>
                    <p>Web Developer</p>
                    <img src={persontwo} className='w-100 img3' alt="person two" />
                </div>
                <div className='col-md-2 text-center m-2 ml-3 cards m-auto card3 mt-3'>
                    <h5 className='mt-4'>Mohamed Walid</h5>
                    <p>Web Developer</p>
                    <img src={personthree} className='w-100 img3' alt="person three" />
                </div>
                <div className='col-md-2 card4 text-center m-2 ml-3 cards m-auto mt-3'>
                    <h5 className='mt-4'>Ala Mohamed</h5>
                    <p>Web Developer</p>
                    <img src={personfour} className='w-100 img3' alt="person four" />
                </div>
                <div className='col-md-2 card5 text-center m-2 ml-3 cards m-auto mt-3'>
                    <h5 className='mt-4'>Anas Mohamed</h5>
                    <p>Web Developer</p>
                    <img src={personfive} className='w-100 img3' alt="person five" />
                </div>
            </div>
        </div>
    )
}

export default Ourteam