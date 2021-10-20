import React from 'react';
import { Container, Filter, List } from './styles';
import Product from '../product/index';
const ProductList: React.FC = () => {
    return (
        <Container>
            <List>
                <Product />
                <Product />
                <Product />
            </List>
        </Container>
    );
};

export default ProductList;
