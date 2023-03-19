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
        "title":"Easy recipies",
        "coverImg":"https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
        "caption":"Aliquam viverra eros vitae augue elementum, et sodales mauris luctus. Integer id eros tempor nibh hendrerit pretium nec eget odio.",
        "link":"",
    },
    {
        "id":2,
        "source":"Instagram",
        "title":"Good food",
        "coverImg":"https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg",
        "caption":"Vestibulum tempor pharetra sem, et dapibus quam tincidunt quis. Vestibulum eu ipsum eu nisi dignissim sodales in id ligula. Curabitur sagittis",
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
