import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Geral/Footer";
import Header from "./components/Geral/Header";
import ProtectedRoute from "./components/Geral/ProtectedRoute";
import { UserStorage } from "./context/UserContext";
import Api from "./pages/Api";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";
import Photo from "./components/Photo/Photo";
import UserProfile from "./pages/User/UserProfile";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main className="min-h-screen font-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute redirect="/login">
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="photo/:id" element={<Photo />} />
            <Route path="user/:username" element={<UserProfile />} />
            <Route path="api" element={<Api />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
