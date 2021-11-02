import React, { useState, useCallback, useEffect } from 'react';
import { array } from 'yup/lib/locale';
import ToastFunction from '../utils/toast';
export const CartContext: any = React.createContext({});
interface ContextProps {
    children: any;
}

interface ProductData {
    image: string;
    name: string;
    price: string;
    id: string;
    qty: number;
}

export const CartProvider = (props: ContextProps) => {
    const [listProduct, setListProduct] = useState<ProductData[]>(() => {
        const storagedProducts = localStorage.getItem('@E-commerce:Cart');

        if (storagedProducts) {
            return JSON.parse(storagedProducts);
        }

        return [];
    });

    useEffect(() => {
        localStorage.setItem('@E-commerce:Cart', JSON.stringify(listProduct));
    }, [listProduct]);

    const [priceCart, setPriceCart] = useState(0);
    const [cartIsOpen, setCartIsOpen] = useState<number>(0);
    const addToCart = ({ image, price, name, id }: ProductData): void => {
        const exist = listProduct.find((item) => item.id === id);
        const product = {
            name: name,
            price: price,
            image: image,
            id: id,
            qty: 1,
        };
        if (exist) {
            setListProduct(
                listProduct.map((item) =>
                    item.id === id ? { ...exist, qty: exist.qty + 1 } : item,
                ),
            );
        } else {
            setListProduct([...listProduct, { ...product, qty: 1 }]);
        }

        ToastFunction('Product added');
    };

    const removeFromCart = ({ name }: ProductData): void => {
        const newList = listProduct.filter((product) => product.name !== name);

        localStorage.setItem('@E-commerce:Cart', JSON.stringify(newList));
        setListProduct(newList);
        ToastFunction('Product removed');
    };

    const RemoveAllFromCart = (): any => {
        if (listProduct.length === 0) {
            return ToastFunction('Cart is empty', 'info');
        }
        localStorage.removeItem('@E-commerce:Cart');
        ToastFunction('Products removed');
        setListProduct([]);
    };

    useEffect(() => {
        let totalPriceCart = 0;
        listProduct.map((product) => {
            const priceFormatted = product.price.replace(',', '.');

            totalPriceCart += parseFloat(priceFormatted) * product.qty;
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
