import React from 'react';
import Header from '../components/header/index';
import Carousel from '../components/carousel/index';
import ProductList from '../components/productList/index';
import ProductFilter from '../components/productFilter/index';

const Home: React.FC = () => (
    <>
        <Header />;
        <Carousel slides={[{}]} />
        <ProductFilter />
        <ProductList />
    </>
);
export default Home;
