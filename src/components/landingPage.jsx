import '../assets/style/landingPage.css'
const LandingPage = () => {
    return (
        <div className='landing-page'>
            <div className='background-image'>
                <div className='overlay'></div>
                <div className="company-name text-center">
                    <h2 className='display-4 text-white bg-seconsary rounded-4 py-2 px-4'>فروشگاه گل و گیاه</h2>
                </div>
                <div className="company-description text-center">
                    <span className='load text-white'>
                        فروشگاه گل و گیاه بهترین در فروش محصولات گل و گیاه برای منازل و محل کار شما
                    </span>
                </div>
                <div className='button'>
                    <button className='btn btn-success mt-4'>برو به صفحه محصولات</button>
                </div>
            </div>
        </div>
    )
}
export default LandingPage