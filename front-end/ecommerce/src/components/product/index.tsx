import React, { useContext, useEffect, useState } from 'react';
import { Container, ProductInfo } from './styles';
import { BiCart } from 'react-icons/all';
import { CartContext } from '../../context/CartContext';
import Button from '../form/button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
interface ProductProps {
    image: string;
    price: string;
    name: string;
    category: string;
}

const Product: React.FC<ProductProps> = ({ image, price, name, category }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <Container>
            <Link to={`/product/${name}`}>
                <img src={'http://localhost:3333/files/' + image} alt="" />

                <ProductInfo>
                    <h3>R$ {price}</h3>
                    <span>{name}</span>
                    <span>{category}</span>
                </ProductInfo>
            </Link>
            <ButtonCart
                icon={BiCart}
                onClick={() => addToCart({ image, price, name })}
            >
                Add to cart
            </ButtonCart>
        </Container>
    );
};

export default Product;

const ButtonCart = styled(Button)`
    min-width: initial;
    width: 200px;
    height: 45px;
`;
