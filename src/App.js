import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './page/Main'; 
import Bookmark from './page/Bookmark'; 
import ProductList from './page/ProductList'; 
import GlobalStyle from './component/GlobalStyle';
import axios from 'axios'; 

function App() {

  // const productHandler = () => {
  //   return axios 
  //   .get('http://cozshopping.codestates-seb.link/api-docs/#/Products/get_api_v1_products?count=10')
  //   .then((res) => {
  //    console.log(res.data)
  //   })
  //   .catch((err) => {
  //     console.log(err.response.data)
  //   })
  // };

  // useEffect(() => {
  //   // 컴포넌트 생성 시 아래 함수가 실행됩니다.
  //   authHandler();
  // }, []);


  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/bookmark" element={<Bookmark/>} /> 
    </Routes>
  </Router>
  </>
  );
}

export default App;