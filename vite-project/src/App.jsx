import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Data from './pages/Data'
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Update from "./pages/Update";
import DeleteData from "./pages/deleteData";
import SpecificData from "./pages/SpecificData";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/data" element={<Data />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/data/:id" element={<SpecificData />} />
      <Route path="/delete/:id" element={<DeleteData/>}/>
    </Routes>
    </>
  );
}

export default App;
