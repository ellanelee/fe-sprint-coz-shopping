import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductList from './pages/ProductList';
import Bookmark from './pages/Bookmark';
import Main from './pages/Main'; 
import GlobalStyle from './component/GlobalStyle';

function App() {

  // const authHandler = () => {
  //   return axios 
  //   .get("http://localhost:4000/userinfo")
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
      <Route path="/product/list" element={<ProductList/>} />
      <Route path="/bookmark" element={<Bookmark/>} /> 
    </Routes>
  </Router>
  </>
  );
}

export default App;
