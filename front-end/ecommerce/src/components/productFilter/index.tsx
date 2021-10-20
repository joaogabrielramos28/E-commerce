import React from 'react';
import { Container, Select } from './styles';
const ProductFilter: React.FC = () => {
    return (
        <Container>
            <h3>Filter</h3>

            <Select>
                <option value="default">Order By</option>
            </Select>
        </Container>
    );
};

export default ProductFilter;
