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
} from './styles';
import { AiOutlineClose } from 'react-icons/all';
interface CartProps {
    modaClose: () => void;
}

interface ProductCartData {
    name: string;
    price: string;
    image: string;
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
                                                value={1}
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
                            <button>Purchase</button>
                        </BuyContainer>
                    </Container>
                    <Overlay onClick={props.modaClose} />
                </>
            ) : null}
        </>
    );
};

export default Cart;
