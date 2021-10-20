import React from 'react';
import { Container, Select } from './styles';
const ProductFilter: React.FC = () => {
    return (
        <Container>
            <h3>Filtrar por</h3>

            <Select>
                <option value="">Category</option>
            </Select>
        </Container>
    );
};

export default ProductFilter;
