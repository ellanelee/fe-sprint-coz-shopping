import React from "react"; 
import styled from 'styled-components'; 
import '../App.css'


const FilterStyler = styled.div`

height: 110px;
width: 82px;
display:flex;
flex-direction: column; 
justify-content: space-between;
align-items:center; 
font-family: Inter;
font-size: 16px;
font-weight: 700;
line-height: 19px;
margin-top:24px;
margin-right: 36px;
&:hover{
    color:blue; 
    font-weight:bold;
    text-decoration: underline; 
}
`
function ProductFilter(){
    return(
        <div className="filterContainer">
        <FilterStyler>
            <img src='../image/all.png' style={{width:"82px", height:"82px"}} />
            <div>전체</div>
        </FilterStyler>
        <FilterStyler>
            <img src='../image/product.png' alt="상품" />
            <p>상품</p>
         </FilterStyler>
         <FilterStyler>
         <img src='../image/category.png' alt="카테고리" />
            <p>카테고리</p>
         </FilterStyler>
         <FilterStyler>
         <img src='../image/category.png' alt="기획전"/>
            <p>기획전</p>
         </FilterStyler>
         <FilterStyler>
         <img src='../image/brand.png'alt="브랜드" />
            <p>브랜드</p>
         </FilterStyler>
         </div>
    )
}
    
export default ProductFilter; 