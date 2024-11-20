import { Link } from "react-router-dom"
import '../App.css'
const GotoShoppingCart = ({ message, img, price }) => {
    return (
        <div className="Goto-container">
            <div className="mb-3">
                <p>
                    {message}
                </p>
                <img src={img} alt="" width={50} />
                <span>{price}</span>
            </div>
            <Link to={'/cart'}>برو به سبد خرید</Link>
        </div>
    )
}
export default GotoShoppingCart