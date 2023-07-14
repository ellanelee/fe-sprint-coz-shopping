import ProductCard from '../component/ProductCard.js'
import ProductFilter from '../component/ProductFilter.js'
import '../App.css'

function ProductList(
    {products,activateModal,setActivateModal,bookmark,setBookmark,modalProduct,setModalProduct}){
        return(
        <section>
            <ProductFilter/>
            <div className="product-content">
            { products.map((product) => 
             <ProductCard key = {product.id} product={product} activateModal={activateModal} 
             setActivateModal={setActivateModal}  bookmark={bookmark} setBookmark={setBookmark}
             modalProduct={modalProduct} setModalProduct={setModalProduct}/>
            )}
            </div>
        </section>
    )
}
export default ProductList; 