import React, { useCallback, useContext, useRef } from 'react';
import { Container, Content, List } from './styles';
import { CgShoppingCart, AiOutlineUser } from 'react-icons/all';
import { Link } from 'react-router-dom';
import Cart from '../cart/index';
import { CartContext } from '../../context/CartContext';
const Header: React.FC = () => {
    const { setCartIsOpen } = useContext(CartContext);
    const handleOpenCart = useCallback(() => {
        setCartIsOpen(true);
    }, []);
    const handleCloseCart = useCallback(() => {
        setCartIsOpen(false);
    }, []);

    return (
        <>
            <Container>
                <Content>
                    <h2>store.com</h2>
                    <List>
                        <Link to="/">Home</Link>
                        <Link to="#">Shop</Link>
                        <Link to="#">Contact</Link>
                    </List>
                    <div>
                        <Link to="/login">
                            <AiOutlineUser size="30" color={'#BB86FC'} />
                        </Link>

                        <CgShoppingCart
                            size="30"
                            color={'#BB86FC'}
                            onClick={handleOpenCart}
                        />
                    </div>
                </Content>
            </Container>
            <Cart modaClose={handleCloseCart} />
        </>
    );
};

export default Header;
