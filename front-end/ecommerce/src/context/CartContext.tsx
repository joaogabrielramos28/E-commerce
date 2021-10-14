import React, { useState } from 'react';
export const CartContext: any = React.createContext({});
interface ContextProps {
    children: any;
}

export const CartProvider = (props: ContextProps) => {
    const [cartIsOpen, setCartIsOpen] = useState<Boolean>(false);

    return (
        <CartContext.Provider value={{ setCartIsOpen, cartIsOpen }}>
            {props.children}
        </CartContext.Provider>
    );
};
