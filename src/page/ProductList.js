import ProductCard from '../component/ProductCard.js'
import ProductFilter from '../component/ProductFilter.js'
import '../App.css'

function ProductList(
    {products,activateModal,
     type, setType, 
     bookmark,setBookmark}){
         
       return(
        <section>
            <ProductFilter type={type} setType={setType}/>
            <div className="product-content">
            { type === "all" ?  
              products.map((product) => (
                 <ProductCard key = {product.id} product={product} 
                 bookmark={bookmark} setBookmark={setBookmark}/>
               ))
             : type === "Category" ?
              products.filter((product) => product.type === type)
              .map((product) => ( 
                <ProductCard key = {product.id} product={product} 
                bookmark={bookmark} setBookmark={setBookmark}/>))
             : type === "Product" ?
             products.filter((product) => product.type === type)
             .map((product) => ( 
               <ProductCard key = {product.id} product={product} 
               bookmark={bookmark} setBookmark={setBookmark}/>))
             : type === "Exhibition" ? 
             products.filter((product) => product.type === type)
             .map((product) => ( 
               <ProductCard key = {product.id} product={product} 
               bookmark={bookmark} setBookmark={setBookmark}/>))
             : type === "Brand" ?
             products.filter((product) => product.type === type)
             .map((product) => ( 
               <ProductCard key = {product.id} product={product} 
               bookmark={bookmark} setBookmark={setBookmark}/>))
             : null }
            
            </div>
        </section>
    )
}
export default ProductList; 