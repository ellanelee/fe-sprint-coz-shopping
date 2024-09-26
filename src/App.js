import React, {useState, useEffect, useRef, useCallback} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './page/Main'; 
import Bookmark from './page/Bookmark'; 
import ProductList from './page/ProductList'; 
import axios from 'axios'; 
import Header from './component/Header'
import Footer from './component/Footer'


function App() {

  const [products, setProduct] = useState([])
  const [bookmark, setBookmark] = useState([])
  const [type, setType] = useState('all')
  const [currentProduct, setCurrentProduct] = useState([]);
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true);
  
  const bottom = useRef(null);

  useEffect(() => {
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
    .then(response => {
    setProduct(response.data);
    setCurrentProduct(response.data.slice(0, 10*page));
    setIsLoading(false);}) 
  }, [page]);
   
  const renderNextPage = useCallback(()=> {
    setIsLoading(true)
    if(page < 10) {
      setCurrentProduct(products.slice(0, 10*(page+1))); 
      setPage(page+1)
    }
    setIsLoading(false);
    }, [page, products]); 

    useEffect(()=> {
      if(bottom.current){
        const observer = new IntersectionObserver(
          (entries) => {
            if(entries[0].isIntersecting){
              console.log(entries[0]);
              console.log(currentProduct); 
              renderNextPage(); 
            }
          }, 
          {threshold:1 , }
        )}
      }, [renderNextPage]);

  return (
  <>
  <Router>
     <Header className="header"/> 
     <Routes>
       <Route path="/" element={<Main 
        products={products} 
        bookmark={bookmark} setBookmark={setBookmark}/>}/>
       
       <Route path="/product/list" element={<ProductList 
        type={type} setType={setType} 
        products={products} 
        bookmark={bookmark} setBookmark={setBookmark}/>}/>
       
       <Route path="/bookmark" element={<Bookmark
       type={type} setType={setType} 
       bookmark={bookmark} setBookmark={setBookmark}/>} /> 
    
    
    
     </Routes>
     <Footer />
   </Router>
  </>
  );
}

export default App;