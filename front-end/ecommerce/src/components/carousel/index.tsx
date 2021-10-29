import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Img from './img.jpg';
import api from '../../services/api';

interface Banner {
    id: string;
    images: string;
}

const Carousel: React.FC = () => {
    const [images, setImages] = useState<Banner[]>([]);
    const [current, setCurrent] = useState(0);
    const length = images.length;
    useEffect(() => {
        api.get<Banner[]>('/banners')
            .then((response) => {
                setImages(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <Container>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight
                className="right-arrow"
                onClick={nextSlide}
            />
            {images.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img
                                src={
                                    'http://localhost:3333/files/' +
                                    slide.images
                                }
                            />
                        )}
                    </div>
                );
            })}
        </Container>
    );
};

export default Carousel;
