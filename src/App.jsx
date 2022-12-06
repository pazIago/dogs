import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Api from "./pages/Api";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="w-4/5 max-w-[800px] mx-auto px-4 font-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="api" element={<Api />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
