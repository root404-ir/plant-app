import monsteraImg from '../assets/images/monstera.png'
import snakePlant from '../assets/images/snake-plant.png'
import zzPlant from '../assets/images/zz-plant.png'
import aloeEvera from '../assets/images/aloe-vera.png'
import bonsai from '../assets/images/bonsai.png'
import fiddleLeaf from '../assets/images/pot.png'
import { useShoppingCart } from '../shoppingCartContext'
import { useState } from 'react'
import GotoShoppingCart from './gotoShoppingCart'

const ProductListingPage = () => {
    const products = [
        { id: 1, name: 'مونسترا', price: "250000", category: 'گرمسیری', thumbnail: monsteraImg },
        { id: 2, name: 'سانسوریا', price: "250", category: 'گیاهان گوشتی', thumbnail: snakePlant },
        { id: 3, name: 'زامیوکالکاس', price: "4500", category: 'گرمسیری', thumbnail: zzPlant },
        { id: 4, name: 'آلوئه‌ورا', price: "20000", category: 'گیاهان گوشتی', thumbnail: aloeEvera },
        { id: 5, name: 'انجیر ربابی', price: "250000", category: 'درخت', thumbnail: fiddleLeaf },
        { id: 6, name: 'بن سای', price: "950000", category: 'درخت', thumbnail: bonsai },
    ]
    const [showNotif, setShowNotif] = useState(null)
    const { addToCart, cartItems } = useShoppingCart()
    const handleAddToCart = (product) => {
        addToCart(product)
        setShowNotif(
            {
                message: `محصول ${product.name} به سبد خرید اضافه شد!`,
                img: product.thumbnail,
                price: product.price,
                id: Date.now()
            }
        )
        setTimeout(() => {
            setShowNotif(null)
        }, 4000)
    }
    const groupedProducts = products.reduce((acc, product) => {
        acc[product.category] = acc[product.category] || []
        acc[product.category].push(product)
        return acc
    }, {})
    return (
        <div className='product-listing-page container'>
            <h1>گیاهان برای فروش</h1>
            {Object.keys(groupedProducts).map(category =>
                <div key={category} className='product-category mb-5'>
                    <h2>{category}</h2>
                    <div className='row d-flex justify-content-center'>
                        {groupedProducts[category].map(product =>
                            <div key={product.id} className='col-md-4 mb-4'>
                                <div className='card'>
                                    <img src={product.thumbnail} alt={product.name} className='card-img-top' />
                                    <div className='card-body text-center'>
                                        <h5 className='card-title'>{product.name}</h5>
                                        <p className='card-text'>{product.price}</p>
                                    </div>
                                    <button className='btn btn-primary' disabled={cartItems.some(item => item.id === product.id)} onClick={() => handleAddToCart(product)}>
                                        {cartItems.some((item) => item.id === product.id) ? 'اضافه شد' : 'افزودن به سبد خرید'}
                                    </button>
                                    {showNotif ? <GotoShoppingCart key={showNotif.id} message={showNotif.message} img={showNotif.img} price={showNotif.price} /> : ''}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
export default ProductListingPage


// onClick={() => addToCart(product)}