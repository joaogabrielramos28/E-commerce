import React, { useState, useCallback } from 'react';
import { Container } from './styles';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from './data';
import Img from './img.jpg';
interface CarouselProps {
    slides: Array<Object>;
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <Container>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight
                className="right-arrow"
                onClick={nextSlide}
            />
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && <img src={slide.image} />}
                    </div>
                );
            })}
        </Container>
    );
};

export default Carousel;