import React from 'react';
import Header from '../components/header/index';
import Carousel from '../components/carousel/index';
import { SliderData } from '../components/carousel/data';

const Home: React.FC = () => (
    <>
        <Header />;
        <Carousel slides={SliderData} />
    </>
);
export default Home;
