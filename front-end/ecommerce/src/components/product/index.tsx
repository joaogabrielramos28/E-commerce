import React, { useContext, useEffect, useState } from 'react';
import { Container, ProductInfo } from './styles';
import { BiCart } from 'react-icons/all';
import { CartContext } from '../../context/CartContext';
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
            <img src={'http://localhost:3333/files/' + image} alt="" />

            <ProductInfo>
                <h3>{price}</h3>
                <span>{name}</span>
                <span>{category}</span>
            </ProductInfo>

            <button onClick={() => addToCart({ image, price, name })}>
                <BiCart size={16} /> Add to cart
            </button>
        </Container>
    );
};

export default Product;
