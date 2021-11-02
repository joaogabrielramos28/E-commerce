import React, { useEffect, useState } from 'react';
import { Container, Filter, List } from './styles';
import Product from '../product/index';
import api from '../../services/api';
interface ProductData {
    id: string;
    name: string;
    images: Array<string>;
    price: string;
    category: string;
    mainImage: string;
}
const ProductList: React.FC = () => {
    const [products, setProducts] = useState<ProductData[]>([]);
    useEffect(() => {
        api.get<ProductData[]>('/products').then((response) => {
            setProducts(response.data);
        });
    }, []);
    return (
        <Container>
            <List>
                {products?.map((product) => (
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
    );
};

export default ProductList;
