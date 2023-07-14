import React, {useState, useEffect} from 'react'
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
  const [type, setType] = useState('all')
  const [activateModal, setActivateModal] = useState(false)
  const [bookmark, setBookmark] = useState([])
  const [modalProduct, setModalProduct] = useState('')
  console.log(bookmark)
  console.log(modalProduct)


  useEffect(() => {
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
  .then(response => setProduct(response.data))
  .catch(error => console.error(error))
  }, []);
   
  console.log(products)
  return (
  <>
  <Router>
     <Header className="header"/> 
     <Routes>
       <Route path="/" element={<Main 
        products={products} 
        activateModal={activateModal} 
        setActivateModal={setActivateModal} 
        bookmark={bookmark} setBookmark={setBookmark}
        modalProduct={modalProduct} setModalProduct={setModalProduct}/>}/>
       
       <Route path="/product/list" element={<ProductList 
        type={type} setType={setType} 
        products={products} 
        activateModal={activateModal} 
        setActivateModal={setActivateModal}
        bookmark={bookmark} setBookmark={setBookmark}
        modalProduct={modalProduct} setModalProduct={setModalProduct}/>}/>
       
       <Route path="/bookmark" element={<Bookmark
       type={type} setType={setType} 
       activateModal={activateModal} 
       setActivateModal={setActivateModal}
       bookmark={bookmark} setBookmark={setBookmark}
       modalProduct={modalProduct} setModalProduct={setModalProduct}/>} /> 
    
    
    
     </Routes>
     <Footer />
   </Router>
  </>
  );
}

export default App;