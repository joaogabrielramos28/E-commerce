import React, { useCallback, useContext, useRef } from 'react';
import { Container, Content, List } from './styles';
import { CgShoppingCart } from 'react-icons/all';
import { Link } from 'react-router-dom';
import Cart from '../cart/index';
import { CartContext } from '../../context/CartContext';
const Header: React.FC = () => {
    const cartRef = useRef(null);
    const { setCartIsOpen } = useContext(CartContext);
    const handleOpenCart = useCallback(() => {
        setCartIsOpen(true);
    }, []);

    return (
        <>
            <Container>
                <Content>
                    <h2>store.com</h2>
                    <List>
                        <Link to="#">Home</Link>
                        <Link to="#">Shop</Link>
                        <Link to="#">Contact</Link>
                    </List>
                    <CgShoppingCart
                        size="30"
                        color={'#BB86FC'}
                        onClick={handleOpenCart}
                    />
                </Content>
            </Container>
            <Cart cartRef={cartRef} />
        </>
    );
};

export default Header;
