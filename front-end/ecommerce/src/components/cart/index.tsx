import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import {
    Container,
    Overlay,
    Header,
    ProductList,
    Product,
    BuyContainer,
    CartInfo,
    CartEmpty,
} from './styles';

import Button from '../form/button';
import { AiOutlineClose } from 'react-icons/all';
interface CartProps {
    modaClose: () => void;
}

import styled from 'styled-components';

interface ProductCartData {
    image: string;
    name: string;
    price: string;
    id: string;
    qty: number;
}

const Cart: React.FC<CartProps> = (props) => {
    const {
        cartIsOpen,
        removeFromCart,
        listProduct,
        priceCart,
        RemoveAllFromCart,
    } = useContext(CartContext);

    return (
        <>
            {cartIsOpen ? (
                <>
                    <Container isOpen={cartIsOpen}>
                        <Header>
                            <span>My Cart</span>
                            <a href="#" onClick={RemoveAllFromCart}>
                                Remove({listProduct.length})
                            </a>
                        </Header>
                        <ProductList>
                            {listProduct.length === 0 && (
                                <CartEmpty>Cart is empty :(</CartEmpty>
                            )}
                            {listProduct.map((product: ProductCartData) => (
                                <Product key={product.name}>
                                    <>
                                        <img
                                            src={
                                                'http://localhost:3333/files/' +
                                                product.image
                                            }
                                            alt=""
                                        />
                                    </>

                                    <div className="infos">
                                        <h4>{product.name}</h4>
                                        <span>{product.price}</span>
                                    </div>
                                    <div className="tes">
                                        <button
                                            onClick={() =>
                                                removeFromCart(product)
                                            }
                                        >
                                            <AiOutlineClose size={25} />
                                        </button>
                                        <span>
                                            <input
                                                defaultValue={product.qty}
                                                type="number"
                                            ></input>
                                        </span>
                                    </div>
                                </Product>
                            ))}
                        </ProductList>

                        <BuyContainer>
                            <CartInfo>
                                <p>Total</p>
                                <span>R${priceCart}</span>
                            </CartInfo>
                            <ButtonCart>Purchase</ButtonCart>
                        </BuyContainer>
                    </Container>
                    <Overlay onClick={props.modaClose} />
                </>
            ) : null}
        </>
    );
};

export default Cart;

const ButtonCart = styled(Button)`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    min-width: initial;
    width: 180px;
    margin: 0 auto;
`;
