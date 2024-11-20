import React from "react"
import { useShoppingCart } from "../shoppingCartContext"

const ShoppingCartIcon = () => {
    const { cartItems } = useShoppingCart()
    return (
        <div className="shopping-cart-icon">
            🛒
            <span className="cart-count">{cartItems.length}</span>
        </div>
    )
}
export default ShoppingCartIcon