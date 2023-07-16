import ProductCard from '../component/ProductCard.js'
import ProductFilter from '../component/ProductFilter.js'
import '../App.css'

function Bookmark(
    {products,activateModal,
     type, setType, 
     setActivateModal,
     bookmark,setBookmark,
     modalProduct,setModalProduct}) {
     console.log("북마크탭", bookmark)

        return(
        <section>
            <ProductFilter type={type} setType={setType}/>
            <div className="product-content">
            { type === "all" ?  
              bookmark.map((product) => (
                 <ProductCard key = {product.id} product={product} 
                 bookmark={bookmark} setBookmark={setBookmark}/>
               ))
             : type === "Category" ?
             bookmark.filter((product) => product.type === type)
              .map((product) => ( 
                <ProductCard key = {product.id} product={product} 
                 bookmark={bookmark} setBookmark={setBookmark}/>))
             : type === "Product" ?
             bookmark.filter((product) => product.type === type)
             .map((product) => ( 
              <ProductCard key = {product.id} product={product} 
              bookmark={bookmark} setBookmark={setBookmark}/>))
             : type === "Exhibition" ? 
             bookmark.filter((product) => product.type === type)
             .map((product) => ( 
              <ProductCard key = {product.id} product={product} 
              bookmark={bookmark} setBookmark={setBookmark}/>))
             : type === "Brand" ?
             bookmark.filter((product) => product.type === type)
             .map((product) => ( 
              <ProductCard key = {product.id} product={product} 
              bookmark={bookmark} setBookmark={setBookmark}/>))
             : null }
            
            </div>
        </section>
    )
}
export default Bookmark; 