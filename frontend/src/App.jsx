import { useState } from "react";
import "./App.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { UserData } from "./context/User.jsx";
import Loading from "./components/Loading.jsx";

function App() {
  const { loading, user, isAuth } = UserData();

  return (
    <>
      <Toaster />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={isAuth ? <Home /> : <Login />} />
          <Route path="/login" element={isAuth ? <Home /> : <Login />} />
          <Route path="/register" element={isAuth ? <Home /> : <Register />} />
        </Routes>
      )}
    </>
  );
}

export default App;
