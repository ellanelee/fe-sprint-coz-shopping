import { useState } from 'react'; 
import styled from 'styled-components'; 
import "../App.css"
import Modal from "./Modal"
import Toast from "./Toast"


const ProductStyler = styled.div`
height: 264px; 
width: 264px; 
margin: 12px; 
position:relative; 
`
const Title = styled.p`
font-family: Inter;
font-size: 16px;
font-weight: 800;
line-height: 19px;
letter-spacing: 0em;
color: ${props => props.color || 'black'};
`

function ProductCard(
    {product,bookmark,setBookmark}){      

    const [isOpen, setIsOpen] = useState(false)
    const [modalProduct, setModalProduct] = useState('')
    const [toastMessage, setToastMessage] = useState('');   
    const [toastVisible, setToastVisible] = useState(false)
    

    let isBookmarked = bookmark.map(el => (el.id))

    function OpenModal() {
        setIsOpen(true)
        setModalProduct(product)
        
    }


   function closeModal () {
    setIsOpen(false);
    setModalProduct(null)
   }

    function handleBookmark(){

        if(isBookmarked.includes(product.id)){
            const updatedBookmark = bookmark.filter(el => el.id !== product.id);
            setBookmark(updatedBookmark)
            setToastMessage("상품이 북마크에서 제거되었습니다.")
            setToastVisible(true)

        }else {
            const updatedBookmark = [...bookmark, product];
            setBookmark(updatedBookmark)  
            setToastMessage("상품이 북마크에 추가되었습니다.")  
            setToastVisible(true)    
            
            
        }
    }

    return(
        <>
         <ProductStyler>
         {isOpen && <Modal isOpen={isOpen} modalProduct={modalProduct} 
         closeModal={closeModal}/> }
         
         <input type="checkbox" className ="bookmarkInput" 
         checked={isBookmarked.includes(product.id)} 
         id={`bookmarkCheck${product.id}`} onChange={()=> handleBookmark(product)}/>
         <label htmlFor={`bookmarkCheck${product.id}`} className ="labelInput" ></label>
         
         <div onClick={()=> OpenModal(product)}>
            <img src={product.type ==="Brand"? product.brand_image_url:product.image_url} 
            alt={product.title} style={{width:"264px", height:"200px"}}/>
         </div>   
         
         {product.type === 'Brand' ? 
            <>
            <div className="productDescription1">
            <Title>{product.brand_name}</Title>
            <div className="productDescription2"> 
            <Title>관심고객수</Title>
            <p>{product.follower.toLocaleString()}</p>
            </div></div>
           </>:null}
            
            {product.type === 'Category' ? <Title>#{product.title}</Title> : null}
          
            {product.type === 'Exhibition' ? 
            <div><Title>{product.title}</Title>
            <div>{product.sub_title}</div></div>:null}
            
            {product.type === 'Product' ? 
            <>
            <div className="productDescription1">
               <Title>{product.title}</Title>
                <div className="productDescription2"> 
                 <Title style={{color:"blue"}}>{product.discountPercentage}%</Title>
                 <p>{parseInt(product.price).toLocaleString()}원</p>
                </div>
            </div>
           </>:null}
           {toastMessage && <Toast toastMessage={toastMessage} 
            toastVisible={toastVisible} setToastVisible={setToastVisible}/>}

           
          </ProductStyler> 
        </>  
        )
}

export default ProductCard; 
