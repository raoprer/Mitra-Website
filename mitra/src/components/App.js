import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import Posts from './Posts';

function App() {
  const postContent = [
    {
        "id":1,
        "source":"YouTube",
        "coverImg":"",
        "caption":"Easy Recipies",
        "link":"",
    },
    {
        "id":2,
        "source":"Instagram",
        "coverImg":"",
        "caption":"Good food",
        "link":"",
    }
]
  return (
    <>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='posts' element={<Posts postContent={postContent}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
