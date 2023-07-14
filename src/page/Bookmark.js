import ProductCard from '../component/ProductCard.js'
import ProductFilter from '../component/ProductFilter.js'
import '../App.css'

function Bookmark(
    {activateModal,setActivateModal,bookmark,setBookmark,modalProduct,setModalProduct}){
        console.log("북마크탭", bookmark)
        return(
        <section>
            <ProductFilter/>
            <div className="product-content">
            { bookmark.map((product) => 
             <ProductCard key = {product.id} product={product} activateModal={activateModal} 
             setActivateModal={setActivateModal}  bookmark={bookmark} setBookmark={setBookmark}
             modalProduct={modalProduct} setModalProduct={setModalProduct} />
            )}
            </div>
        </section>
    )
}
export default Bookmark; 