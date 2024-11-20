import { Link } from 'react-router-dom'
import { useShoppingCart } from '../shoppingCartContext'
import '../App.css'
const Header = () => {
    const { cartItems } = useShoppingCart()
    const totalItems = cartItems.length
    return (
        <header className='header d-flex justify-content-between align-items-center p-3 bg-dark text-white'>
            <div className='d-flex gap-4 align-items-center'>
                <Link to={'/products'} className='text-white text-decoration-none'>
                    <h2>محصولات</h2>
                </Link>
                <Link to={'/'} className='text-white text-decoration-none'>
                    <span>خانه</span>
                </Link>
                <Link to={'/cart'} className="text-white text-decoration-none">
                    <div className="shopping-cart-icon">
                        🛒
                        <span className="cart-count bg-danger text-white rounded-circle px-2 ml-2">
                            {totalItems}
                        </span>
                    </div>
                </Link>
            </div>
        </header>
    )
}
export default Header