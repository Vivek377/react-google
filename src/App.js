import React from "react";
// import './App.css';
import Home from "./Home";
import SearchPage from "./SearchPage";
import {BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    //
    <div className="app">
    <BrowserRouter>
      <Routes>
        
          <Route path="/search">
                <SearchPage />
          </Route>
          <Route path="/">
              <Home />
          </Route>


      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
