
import React, { useState, useEffect } from 'react'; 
import '../App.css';
import styled from 'styled-components';
import ProductCard from '../component/ProductCard.js';
import axios from 'axios';

const TitleStyler = styled.div`
font-family: Inter;
font-size: 24px;
font-weight: 600;
line-height: 29px; 
height: 38px;
width: 178px;
margin-top: 12px; 
margin-left:76px;
marginTop: ${props => props || "12px"};
`

function  Main(
  {type, setType, products,activateModal,setActivateModal,bookmark,
    setBookmark,modalProduct, setModalProduct}) {
          
    const [mainProducts, setMainProduct] = useState([])
    useEffect(() => {
        axios.get('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
      .then(response => setMainProduct(response.data))
      .catch(error => console.error(error))
      }, []); 

      return(
        <>
        <section >
        <TitleStyler style={{"marginTtop":"52px"}}>상품 리스트</TitleStyler>
        <div className="main-content">
        { mainProducts.map((product) => 
         <ProductCard key = {product.id} product={product} 
         activateModal={activateModal} 
         setActivateModal={setActivateModal}
         bookmark={bookmark} setBookmark={setBookmark}
         modalProduct={modalProduct} setModalProduct={setModalProduct} />
        )}
        </div>
        </section>
        <section >
        <TitleStyler>북마크 리스트</TitleStyler>
        <div className="main-content">
        { bookmark.map((product) => (
                 <ProductCard key = {product.id} product={product} 
                 activateModal={activateModal} setActivateModal={setActivateModal}  
                 bookmark={bookmark} setBookmark={setBookmark}
                 modalProduct={modalProduct} setModalProduct={setModalProduct}/>
               ))
        }
        </div>
        </section>
        
           </>
    )
}

export default Main; 


   