
import ProductCard from '../component/ProductCard.js'
import '../App.css'

function  Main({type, setType, products,activateModal,setActivateModal,modalHanlder}) {
    return(
     <section className="main-content">
        { products.map((product) => 
         <ProductCard key = {product.id} product={product} activateModal={activateModal} 
         setActivateModal={setActivateModal} />
        )}
    </section>
    )
}

export default Main; 

