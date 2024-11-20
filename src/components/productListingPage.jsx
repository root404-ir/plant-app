import monsteraImg from '../assets/images/monstera.png'
import snakePlant from '../assets/images/snake-plant.png'
import zzPlant from '../assets/images/zz-plant.png'
import aloeEvera from '../assets/images/aloe-vera.png'
import bonsai from '../assets/images/bonsai.png'
import fiddleLeaf from '../assets/images/pot.png'
import { useShoppingCart } from '../shoppingCartContext'

const ProductListingPage = () => {
    const products = [
        { id: 1, name: 'Monstera', price: 25, category: 'Tropical', thumbnail: monsteraImg },
        { id: 2, name: 'Snake Plant', price: 15, category: 'Succulent', thumbnail: snakePlant },
        { id: 3, name: 'ZZ Plant', price: 20, category: 'Tropical', thumbnail: zzPlant },
        { id: 4, name: 'Aloe Vera', price: 10, category: 'Succulent', thumbnail: aloeEvera },
        { id: 5, name: 'Fiddle Leaf Fig', price: 30, category: 'Tree', thumbnail: fiddleLeaf },
        { id: 6, name: 'Bonsai', price: 40, category: 'Tree', thumbnail: bonsai },
    ]
    const { addToCart, cartItems } = useShoppingCart()
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
                                    <button className='btn btn-primary' disabled={cartItems.some(item => item.id === product.id)} onClick={() => addToCart(product)}>
                                        {cartItems.some(item => item.id === product.id ? 'اضافه شد' : 'اضافه کردن به سبد خرید')}
                                    </button>
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