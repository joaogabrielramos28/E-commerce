import React, { useState, useCallback, useEffect } from 'react';
export const CartContext: any = React.createContext({});
interface ContextProps {
    children: any;
}

interface ProductData {
    image: string;
    name: string;
    price: string;
}

export const CartProvider = (props: ContextProps) => {
    const [listProduct, setListProduct] = useState<ProductData[]>(() => {
        const storagedProducts = localStorage.getItem('@E-commerce:Cart');

        if (storagedProducts) {
            return JSON.parse(storagedProducts);
        }

        return [];
    });
    const [priceCart, setPriceCart] = useState(0);
    const [cartIsOpen, setCartIsOpen] = useState<Boolean>(false);
    const addToCart = ({ image, price, name }: ProductData): void => {
        const product = {
            image: image,
            price: price,
            name: name,
        };

        setListProduct([...listProduct, product]);

        localStorage.setItem('@E-commerce:Cart', JSON.stringify(listProduct));
    };

    const removeFromCart = ({ name }: ProductData): void => {
        const newList = listProduct.filter((product) => product.name !== name);

        localStorage.setItem('@E-commerce:Cart', JSON.stringify(newList));
        setListProduct(newList);
    };

    const RemoveAllFromCart = (): void => {
        localStorage.removeItem('@E-commerce:Cart');

        setListProduct([]);
    };

    useEffect(() => {
        let totalPriceCart = 0;
        listProduct.map((product) => {
            const priceFormatted = product.price.replace(',', '.');

            totalPriceCart += parseFloat(priceFormatted);
        });

        setPriceCart(totalPriceCart);
    }, [listProduct]);

    return (
        <CartContext.Provider
            value={{
                setCartIsOpen,
                cartIsOpen,
                addToCart,
                removeFromCart,
                listProduct,
                priceCart,
                RemoveAllFromCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
