import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Projects from './components/Projects';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='/projects' element={<Projects/>}/>
      </Route>
    </Routes>
  );
}

export default App;
