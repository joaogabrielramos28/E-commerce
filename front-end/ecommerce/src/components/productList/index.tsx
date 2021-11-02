import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Container, List, LoadContainer } from './styles';
import Product from '../product/index';
import api from '../../services/api';
import Button from '../form/button/index';
interface ProductData {
    id: string;
    name: string;
    images: Array<string>;
    price: string;
    category: string;
    mainImage: string;
}

import styled from 'styled-components';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<ProductData[]>([]);
    const [productsVisible, setProductsVisible] = useState<number>(3);

    const moreProductsVisible = useCallback(() => {
        setProductsVisible(productsVisible + 3);
    }, []);

    useEffect(() => {
        api.get<ProductData[]>('/products').then((response) => {
            setProducts(response.data);
        });
    }, []);
    return (
        <>
            <Container>
                <List>
                    {products.slice(0, productsVisible)?.map((product) => (
                        <Product
                            image={product.mainImage}
                            price={product.price}
                            category={product.category}
                            name={product.name}
                            id={product.id}
                            key={product.id}
                        />
                    ))}
                </List>
            </Container>
            <LoadContainer>
                <ButtonLoad
                    disabled={products.length === productsVisible}
                    onClick={moreProductsVisible}
                >
                    Load More
                </ButtonLoad>
            </LoadContainer>
        </>
    );
};

export default ProductList;

const ButtonLoad = styled(Button)`
    min-width: initial;
    width: 350px;
    margin: 20px 0;
    cursor: pointer;

    &:disabled {
        cursor: no-drop;
        background: transparent;
        border: 2px solid #bb86fc;

        &:hover {
            opacity: 0.5;
        }
    }
`;
