import React from 'react'
import "./main.css";
function Whychooseus() {
    const one = 'https://drive.google.com/uc?export=view&id=1Olz283yHNSnyw4blNXmNlF34NizGEwnZ';
    const two = 'https://drive.google.com/uc?export=view&id=1P-iZnzAj_PGGL_EUNDqXjFNeZyXKPSiJ';
    const three = 'https://drive.google.com/uc?export=view&id=1RNdABddashvAYCqkjP1U0CAQb2o0TETH';
    const four = 'https://drive.google.com/uc?export=view&id=1M2a0lGZEa9663HniVEHmIrbhUmczrtWm';
    return (
        <div className='bg-light p-3'>
            <h1 className='header text-center'>Why Choose Us?</h1>
            <div className='m-5 row'>
                <div className='col-md-3 col-sm-12'>
                    <img src={one} alt="one" className='w-25' />
                    <h4 className='ml-1 mt-2'>Special Financing Offers</h4>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className='col-md-3 col-sm-12'>
                    <img src={two} alt="two" className='w-25' />
                    <h4 className='ml-1 mt-2'>Trusted Car Dealership</h4>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className='col-md-3 col-sm-12'>
                    <img src={three} alt="three" className='w-25' />
                    <h4 className='ml-1 mt-2'>Transparent Pricing</h4>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className='col-md-3 col-sm-12'>
                    <img src={four} alt="four" className='w-25' />
                    <h4 className='ml-1 mt-2'>Special Financing Offers</h4>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
            </div>
        </div>
    )
}

export default Whychooseus