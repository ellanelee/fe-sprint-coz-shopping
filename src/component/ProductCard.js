import styled from 'styled-components'; 
import "../App.css"
import Modal from "./Modal"


const ProductStyler = styled.div`
height: 264px; 
width: 264px; 
margin: 12px; 
postion:relative; 
`
const Title = styled.p`
font-family: Inter;
font-size: 16px;
font-weight: 800;
line-height: 19px;
letter-spacing: 0em;
color: ${props => props.color || 'black'};
`

function ProductCard({product,activateModal,setActivateModal}){      

    function modalHandler() {
        setActivateModal(!activateModal)
        console.log(activateModal)
    }

    function bookmarkHandler(){

    }

    return(
        <>
        {activateModal === true ? <Modal product={product} modalHandelr={modalHandler}/>:null }
         <ProductStyler onClick={modalHandler}>
            <img src={product.type ==="Brand"? product.brand_image_url:product.image_url} 
            alt={product.title} style={{width:"264px", height:"200px"}}/>
            
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
            </div></div>
           </>:null}
           <img className="bookmarkicon" src='../image/star_off.png' onClick={bookmarkHandler}/>
          </ProductStyler> 
        </>  
        )
}

export default ProductCard; 
