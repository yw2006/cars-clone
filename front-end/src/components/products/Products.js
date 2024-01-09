import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Product } from "./Product";
import { stock, responsive } from "./data";
import './Products.css';
const ProductItems = stock.map((item) => (
    <Product
        key={item.name}
        name={item.name}
        image={item.image}
        price={item.price}
        power={item.power}
        oil={item.oil}
        miles={item.miles}
        manual_auto={item.manual_auto}
        id={item.id}
    />
));

const P_SedanItems = stock
    .filter((item) => item.category === "sedanData")
    .map((item) => (
        <Product
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            power={item.power}
            oil={item.oil}
            miles={item.miles}
            manual_auto={item.manual_auto}
            id={item.id}
        />
    ));

const P_SUVItems = stock.filter((item) => item.category === "suvData").map((item) => (
    < Product
        key={item.name}
        name={item.name}
        image={item.image}
        price={item.price}
        power={item.power}
        oil={item.oil}
        miles={item.miles}
        manual_auto={item.manual_auto}
        id={item.id}

    />

))



const P_ConvertibleItems = stock.filter((item) => item.category === "convertibleData").map((item) => (
    < Product
        key={item.name}
        name={item.name}
        image={item.image}
        price={item.price}
        power={item.power}
        oil={item.oil}
        miles={item.miles}
        manual_auto={item.manual_auto}
        id={item.id}

    />
))

function Products() {
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
        </div>
    );
}

export default Products;
