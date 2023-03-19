import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import Posts from './Posts';

function App() {
  return (
    <>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='posts' element={<Posts/>}></Route>
      </Routes>
    </>
  );
}

export default App;
