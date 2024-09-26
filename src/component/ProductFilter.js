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

function ProductFilter({type, setType}){
     
    function typeHandler(el) {

        if (el === "전체") {
          setType("all");
        } else if (el === "상품") {
          setType("Product");
        } else if (el === "카테고리") {
          setType("Category");
        } else if (el === "기획전") {
          setType("Exhibition");
        } else if (el === "브랜드") {
          setType("Brand");
        }
      }

    return(
        <div className="filterContainer">
        <div className="filterAll">
        <FilterStyler onClick={()=> typeHandler("전체")} >
            <img src='../image/all.png' style={{width:"82px", height:"82px"}} alt="전체" />
            <div>전체</div>
        </FilterStyler>
        </div>
        <div className="filterAll">
        <FilterStyler onClick={()=> typeHandler("상품")}>
            <img src='../image/product.png' alt="상품" />
            <p>상품</p>
         </FilterStyler>
         </div>
         <div className="filterAll">
         <FilterStyler onClick={()=> typeHandler("카테고리")}>
         <img src='../image/category.png' alt="카테고리" />
            <p>카테고리</p>
         </FilterStyler>
         </div>
         <div className="filterAll">
         <FilterStyler onClick={()=> typeHandler("기획전")}>
         <img src='../image/Exhibition.png' alt="기획전"/>
            <p>기획전</p>
         </FilterStyler>
         </div>
         <div className="filterAll">
         <FilterStyler onClick={()=> typeHandler("브랜드")}>
         <img src='../image/brand.png'alt="브랜드" />
            <p>브랜드</p>
         </FilterStyler>
         </div>
         </div>
    )
}
    
export default ProductFilter; 