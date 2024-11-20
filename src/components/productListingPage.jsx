import monsteraImg from '../assets/images/monstera.png'
import snakePlant from '../assets/images/snake-plant.png'
import zzPlant from '../assets/images/zz-plant.png'
import aloeEvera from '../assets/images/aloe-vera.png'
import bonsai from '../assets/images/bonsai.png'
import fiddleLeaf from '../assets/images/pot.png'

const ProductListingPage = () => {
    const products = [
        { id: 1, name: 'Monstera', price: 25, category: 'Tropical', thumbnail: monsteraImg },
        { id: 2, name: 'Snake Plant', price: 15, category: 'Succulent', thumbnail: snakePlant },
        { id: 3, name: 'ZZ Plant', price: 20, category: 'Tropical', thumbnail: zzPlant },
        { id: 4, name: 'Aloe Vera', price: 10, category: 'Succulent', thumbnail: aloeEvera },
        { id: 5, name: 'Fiddle Leaf Fig', price: 30, category: 'Tree', thumbnail: fiddleLeaf },
        { id: 6, name: 'Bonsai', price: 40, category: 'Tree', thumbnail: bonsai },
    ]
    return (
        <div>

        </div>
    )
}
export default ProductListingPage