import { Link } from "react-router-dom"
import '../App.css'
import { useShoppingCart } from "../shoppingCartContext"
const GotoShoppingCart = () => {
    const { cartItems } = useShoppingCart()
    return (
        <div className="Goto-container">
            {cartItems.map(item =>
                <p>
                    {`محصول ${item.name} به سبد خرید اضافه شد!`}
                </p>
            )}
            <Link to={'/cart'}>برو به سبد خرید</Link>
        </div>
    )
}
export default GotoShoppingCart