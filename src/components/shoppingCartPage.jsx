import { Link } from "react-router-dom"
import { useShoppingCart } from "../shoppingCartContext"
import Swal from "sweetalert2"

const ShoppingCartPage = () => {
    const { cartItems, incrementItem, decrementItem, removeItem } = useShoppingCart()
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return (
        <div className="container mt-5">
            <h2>سبد خرید شما</h2>
            {cartItems.length === 0 ? (
                <p>سبد خرید شما خالی است. <Link to={'/products'}>ادامه فروشگاه</Link></p>
            ) : (
                <>
                    <ul className="list-group mb-4">
                        {cartItems.map(item =>
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src={item.thumbnail} alt={item.name} width='50' className="me-3" />
                                    <div>
                                        <h5>{item.name}</h5>
                                        <p>{item.price} به ازای هر محصول</p>
                                    </div>
                                </div>
                                <div className="quantity-controls d-flex align-items-center">
                                    <button className="btn btn-danger mx-1" onClick={() => decrementItem(item.id)} disabled={item.quantity === 1}>-</button>
                                    <span>{item.quantity}</span>
                                    <button className="btn btn-success mx-1" onClick={() => incrementItem(item.id)} >+</button>
                                </div>
                                <div className="text-right">
                                    <p>{(item.price * item.quantity).toFixed(2)}</p>
                                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>حذف</button>
                                </div>
                            </li>
                        )}
                    </ul>
                    <div className="cart-summary mb-4">
                        <h4>تعداد کل محصولات : {totalItems}</h4>
                        <h4>قیمت نهایی : {parseInt(totalPrice)}</h4>
                    </div>
                    <button className="btn btn-primary me-3" onClick={() => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "سفارش شما با موفقیت ثبت شد!",
                            showConfirmButton: false,
                            timer: 2500
                        });
                    }}>نهایی کردن سفارش</button>
                    <Link to={'/products'} className="btn btn-secondary">برو به ادامه فروشگاه</Link>
                </>
            )}
        </div>
    )
}
export default ShoppingCartPage