import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import "./styles/App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
      <div className="App">
        {/* <LoginRegister/> */}
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/reset" element={<Reset />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/*" 
                  element={
                    <div>
                      <Header/>
                      <Meme/>
                    </div>}/>
            </Routes>
        </Router>
      </div>
  )
}
