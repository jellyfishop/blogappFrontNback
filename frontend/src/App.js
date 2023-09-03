import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login';
import Blogs from './components/Blogs';
import AddBlog from './components/AddBlog';
import Update from './components/Update';
import View from './components/View';



function App() {
  return (
    <React.Fragment>
          <Routes>

            <Route path="/" element={<Login/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/blogs/add" element={<AddBlog/>} />
            <Route path="/edit/:id" element={<Update></Update>}></Route>
            <Route path="/view/:id" element={<View></View>}></Route>


          </Routes>
    </React.Fragment>
  );
}

export default App;
