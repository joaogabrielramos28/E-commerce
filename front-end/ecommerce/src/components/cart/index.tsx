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

const Cart: React.FC<CartProps> = (props) => {
    const { cartIsOpen } = useContext(CartContext);
    return (
        <>
            {cartIsOpen ? (
                <>
                    <Container isOpen={cartIsOpen}>
                        <Header>
                            <span>My Cart</span>
                            <a href="#">Remove(1)</a>
                        </Header>
                        <ProductList>
                            <Product>
                                <>
                                    <img
                                        src={
                                            'https://a-static.mlcdn.com.br/618x463/funko-pop-a-freira-775-the-nun/explorersclubtoysecollectibles/fka88824/127e1c0f794e4c96aa1541899253675a.jpg'
                                        }
                                        alt=""
                                    />
                                </>

                                <div className="infos">
                                    <h4>Funko Pop Freira 140</h4>
                                    <span>R$ 140,00</span>
                                </div>
                                <div className="tes">
                                    <button>
                                        <AiOutlineClose size={25} />
                                    </button>
                                    <span>
                                        <input value={1} type="number"></input>
                                    </span>
                                </div>
                            </Product>
                            <Product>
                                <>
                                    <img
                                        src={
                                            'https://a-static.mlcdn.com.br/618x463/funko-pop-a-freira-775-the-nun/explorersclubtoysecollectibles/fka88824/127e1c0f794e4c96aa1541899253675a.jpg'
                                        }
                                        alt=""
                                    />
                                </>

                                <div className="infos">
                                    <h4>Funko Pop Freira 140</h4>
                                    <span>R$ 140,00</span>
                                </div>
                                <div className="tes">
                                    <button>
                                        <AiOutlineClose size={25} />
                                    </button>
                                    <span>
                                        <input value={1} type="number"></input>
                                    </span>
                                </div>
                            </Product>
                        </ProductList>

                        <BuyContainer>
                            <CartInfo>
                                <p>Total</p>
                                <span>R$150.00</span>
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
