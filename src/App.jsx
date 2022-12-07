import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { UserStorage } from "./context/UserContext";
import Api from "./pages/Api";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <div className="font-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="api" element={<Api />} />
          </Routes>
        </div>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
