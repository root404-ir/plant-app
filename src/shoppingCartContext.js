import React, { createContext, useContext, useState } from 'react';
const ShoppingCartContext = createContext()

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const exitingItem = prevItems.find(item => item.id === product.id)
            if (exitingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...prevItems, { ...product, quantity: 1 }]
        })
    }
    const incrementItem = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        )
    }
    const decrementItem = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ).filter(item => item.quantity > 0)
        )
    }
    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    return (
        <ShoppingCartContext.Provider value={{ cartItems, addToCart, incrementItem, decrementItem, removeItem }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}