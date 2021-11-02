import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/form/button';
import api from '../../services/api';
import { BiCart } from 'react-icons/bi';
import Header from '../../components/header';
import styled from 'styled-components';

import { Container, Content, ImageSlider } from './styles';
import product from '../../components/product';

interface ParamsProps {
    name: string;
}

interface ProductProps {
    id: string;
    name: string;
    price: string;
    mainImage: string;
    images: Array<string>;
    category: string;
}

const ProductPage = () => {
    const { name } = useParams<ParamsProps>();
    const formattedName = name.replaceAll('-', ' ');
    const [product, setProduct] = useState<ProductProps | null>(null);

    useEffect(() => {
        api.get<ProductProps>(`/products`, {
            params: { name: formattedName },
        }).then((response) => {
            setProduct(response.data);
        });
    }, [name]);
    const [principalImage, setPrincipalImage] = useState<string | null>(null);
    const handleChangeImage = useCallback((image): void => {
        setPrincipalImage(image.target.src);
    }, []);

    return (
        <>
            <Header />
            <Container>
                <ImageSlider>
                    {principalImage ? (
                        <img
                            src={principalImage}
                            alt="image"
                            className="principal-image"
                        />
                    ) : (
                        <img
                            src={`http://localhost:3333/files/${product?.mainImage}`}
                            alt="image"
                            className="principal-image"
                        />
                    )}

                    <div>
                        {product?.images.map((image) => (
                            <>
                                <img
                                    src={`http://localhost:3333/files/${image}`}
                                    alt="image"
                                    onClick={handleChangeImage}
                                    key={image}
                                />
                            </>
                        ))}
                    </div>
                </ImageSlider>
                <Content>
                    <div>
                        <h2>{product?.name}</h2>
                        <h4>{product?.category}</h4>
                    </div>

                    <span>R$ {product?.price}</span>

                    <ButtonCart icon={BiCart}>Add to cart</ButtonCart>
                </Content>
            </Container>
        </>
    );
};

export default ProductPage;

const ButtonCart = styled(Button)`
    min-width: initial;
    width: 300px;
`;
