import React from 'react'
// import { Route } from 'react-router'
import NormalLoginForm from './NormalLoginForm'
import SignUp from './SignUp'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

export default function Routess() {
    return (
       
      <Routes>
         <Route path="/" element={ <NormalLoginForm/>}/>
         <Route path="/signup" element={ <SignUp/>}/>
      </Routes>
       
    )
}
