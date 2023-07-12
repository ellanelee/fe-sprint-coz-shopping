import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductList from './pages/ProductList';
import Bookmark from './pages/Bookmark';
import Main from './pages/Main'; 
import GlobalStyle from './component/GlobalStyle';

function App() {

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
