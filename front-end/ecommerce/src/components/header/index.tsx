import React from 'react';
import { Container, Content, List } from './styles';
import { CgShoppingCart } from 'react-icons/all';
import { Link } from 'react-router-dom';
const Header: React.FC = () => (
    <Container>
        <Content>
            <h2>store.com</h2>
            <List>
                <Link to="#">Home</Link>
                <Link to="#">Shop</Link>
                <Link to="#">Contact</Link>
            </List>
            <CgShoppingCart size="30" color={'#BB86FC'} />
        </Content>
    </Container>
);

export default Header;
