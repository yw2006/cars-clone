import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Product } from "./Product";
import { responsive } from "./data";
import './Products.css';
import { useEffect, useState } from "react";
import axios from 'axios';


function Products() {
    const [cars, setCars] = useState([]);
    const getData = async () => {
        const response = await axios.get("http://localhost:5000/cars")
        setCars(response.data)
        console.log(response.data)
    }
    useEffect(() => {
        getData()
    }, [])
    const ProductItems = cars && cars.map((item) => (
        <Product
            key={item.car_id}
            name={item.name}
            image={item.image}
            price={item.price}
            car_id={item.car_id}
            description={item.description}
        />
    ));

    const P_SedanItems = cars && cars
        .filter((item) => item.category === "sedan")
        .map((item) => (
            <Product
                key={item.car_id}
                name={item.name}
                image={item.image}
                price={item.price}
                car_id={item.car_id}
                description={item.description}
            />
        ));

    const P_SUVItems = cars && cars.filter((item) => item.category === "SUV").map((item) => (
        < Product
            key={item.car_id}
            name={item.name}
            image={item.image}
            price={item.price}
            car_id={item.car_id}
            description={item.description}

        />

    ))



    const P_ConvertibleItems = cars && cars.filter((item) => item.category === "convertible").map((item) => (
        < Product
            key={item.car_id}
            name={item.name}
            image={item.image}
            price={item.price}
            car_id={item.car_id}
            description={item.description}

        />
    ))


    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="products">
            <h1 className='header'>The Most Searched Cars</h1>

            <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                <TabList className="nav nav-underline justify-content-center mb-4 mt-4">
                    <Tab className="nav-item">
                        <a style={{ borderBottom: tabIndex === 0 ? '2px solid blue' : 'none', fontWeight: tabIndex === 0 ? 'normal' : 'normal' }} className={`nav-link ${tabIndex === 0 ? 'active' : ''}`} >Stock</a>
                    </Tab>
                    <Tab className="nav-item">
                        <a style={{ borderBottom: tabIndex === 1 ? '2px solid blue' : 'none', fontWeight: tabIndex === 1 ? 'normal' : 'normal' }} className={`nav-link ${tabIndex === 1 ? 'active' : ''}`} >Sedan</a>
                    </Tab>
                    <Tab className="nav-item">
                        <a style={{ borderBottom: tabIndex === 2 ? '2px solid blue' : 'none', fontWeight: tabIndex === 2 ? 'normal' : 'normal' }} className={`nav-link ${tabIndex === 2 ? 'active' : ''}`} >SUV</a>
                    </Tab>
                    <Tab className="nav-item">
                        <a style={{ borderBottom: tabIndex === 3 ? '2px solid blue' : 'none', fontWeight: tabIndex === 3 ? 'normal' : 'normal' }} className={`nav-link ${tabIndex === 3 ? 'active' : ''}`} >Convertible</a>
                    </Tab>
                </TabList>

                <TabPanel>
                    <Carousel responsive={responsive}>
                        {ProductItems}
                    </Carousel>
                </TabPanel>

                <TabPanel>
                    <Carousel responsive={responsive}>
                        {P_SedanItems}
                    </Carousel>
                </TabPanel>

                <TabPanel>
                    <Carousel responsive={responsive}>
                        {P_SUVItems}
                    </Carousel>
                </TabPanel>

                <TabPanel>
                    <Carousel responsive={responsive}>
                        {P_ConvertibleItems}
                    </Carousel>
                </TabPanel>
            </Tabs>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <a href='/AllProducts' className='btn btn-dark'>All Products</a>
            </div>
        </div>
    );
}

export default Products;
