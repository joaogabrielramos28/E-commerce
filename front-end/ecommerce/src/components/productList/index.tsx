import React from 'react';
import { Container, Filter, List } from './styles';
import Product from '../product/index';
import ProductFilter from '../productFilter/index';
const ProductList: React.FC = () => {
    return (
        <Container>
            <Filter>
                <ProductFilter />
            </Filter>
            <List>
                <Product />
                <Product />
                <Product />
            </List>
        </Container>
    );
};

export default ProductList;
