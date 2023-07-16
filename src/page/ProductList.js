import ProductCard from '../component/ProductCard.js'
import ProductFilter from '../component/ProductFilter.js'
import '../App.css'

function ProductList(
    {products,activateModal,
     type, setType, 
     setActivateModal,
     bookmark,setBookmark,
     modalProduct,setModalProduct}){
         
       return(
        <section>
            <ProductFilter type={type} setType={setType}/>
            <div className="product-content">
            { type === "all" ?  
              products.map((product) => (
                 <ProductCard key = {product.id} product={product} 
                 activateModal={activateModal} setActivateModal={setActivateModal}  
                 bookmark={bookmark} setBookmark={setBookmark}
                 modalProduct={modalProduct} setModalProduct={setModalProduct}/>
               ))
             : type === "Category" ?
              products.filter((product) => product.type === type)
              .map((product) => ( 
                <ProductCard key = {product.id} product={product} 
                activateModal={activateModal} setActivateModal={setActivateModal}  
                bookmark={bookmark} setBookmark={setBookmark}
                modalProduct={modalProduct} setModalProduct={setModalProduct}/>))
             : type === "Product" ?
             products.filter((product) => product.type === type)
             .map((product) => ( 
               <ProductCard key = {product.id} product={product} 
               activateModal={activateModal} setActivateModal={setActivateModal}  
               bookmark={bookmark} setBookmark={setBookmark}
               modalProduct={modalProduct} setModalProduct={setModalProduct}/>))
             : type === "Exhibition" ? 
             products.filter((product) => product.type === type)
             .map((product) => ( 
               <ProductCard key = {product.id} product={product} 
               activateModal={activateModal} setActivateModal={setActivateModal}  
               bookmark={bookmark} setBookmark={setBookmark}
               modalProduct={modalProduct} setModalProduct={setModalProduct}/>))
             : type === "Brand" ?
             products.filter((product) => product.type === type)
             .map((product) => ( 
               <ProductCard key = {product.id} product={product} 
               activateModal={activateModal} setActivateModal={setActivateModal}  
               bookmark={bookmark} setBookmark={setBookmark}
               modalProduct={modalProduct} setModalProduct={setModalProduct}/>))
             : null }
            
            </div>
        </section>
    )
}
export default ProductList; 