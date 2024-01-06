import React from 'react'
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'
import four from './images/5.png'
import "./main.css";
function Whychooseus() {
    return (
        <div className='bg-light p-3'>
            <h1 className='header text-center'>Why Choose Us?</h1>
            <div className='m-5 row'>
                <div className='col-md-3 col-sm-12'>
                    <img src={one} alt="" className='w-25' />
                    <h4 className='ml-1 mt-2'>Special Financing Offers</h4>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className='col-md-3 col-sm-12'>
                    <img src={two} alt="" className='w-25' />
                    <h4 className='ml-1 mt-2'>Trusted Car Dealership</h4>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className='col-md-3 col-sm-12'>
                    <img src={three} alt="" className='w-25' />
                    <h4 className='ml-1 mt-2'>Transparent Pricing</h4>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className='col-md-3 col-sm-12'>
                    <img src={four} alt="" className='w-25' />
                    <h4 className='ml-1 mt-2'>Special Financing Offers</h4>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
            </div>
        </div>
    )
}

export default Whychooseus