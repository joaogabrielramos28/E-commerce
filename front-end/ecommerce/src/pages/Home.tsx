import React from 'react';
import Header from '../components/header/index';
import Carousel from '../components/carousel/index';
import { SliderData } from '../components/carousel/data';
import ProductList from '../components/productList/index';
import ProductFilter from '../components/productFilter/index';

const Home: React.FC = () => (
    <>
        <Header />;
        <Carousel slides={SliderData} />
        <ProductFilter />
        <ProductList />
    </>
);
export default Home;
