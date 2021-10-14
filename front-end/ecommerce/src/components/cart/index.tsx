import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Container } from './styles';

interface CartProps {
    cartRef: any | null;
}

const Cart: React.FC<CartProps> = (props) => {
    const { cartIsOpen } = useContext(CartContext);
    return (
        <>
            {cartIsOpen ? (
                <Container ref={props.cartRef} isOpen={cartIsOpen}>
                    <h2>OLA</h2>
                </Container>
            ) : null}
        </>
    );
};

export default Cart;
