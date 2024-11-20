import { Link } from "react-router-dom"
import '../App.css'
const GotoShoppingCart = () => {
    return (
        <div className="Goto-container">
            <p>با موفقیت به سبد خرید اضافه شد!</p>
            <Link to={'/cart'}>برو به سبد خرید</Link>
        </div>
    )
}
export default GotoShoppingCart