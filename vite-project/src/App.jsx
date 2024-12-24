import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Data from './pages/Data'
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import DeleteData from "./pages/deleteData";
import EditData from "./pages/EditData";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/data" element={<Data />} />
      <Route path="/delete" element={<DeleteData/>}/>
      <Route path="/edit" element={<EditData/>}/>
    </Routes>
    </>
  );
}

export default App;
