import logo from "./logo.svg";
import "./App.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";
import About from "./pages/about";
import Cart from "./pages/cart";
import Services from "./pages/services";
import Dashboard from "./components/users/dashboard";
import Profile from "./components/users/profile";
import AboutUser from "./components/users/aboutUser";
import CustomNavbar from "./components/users/navbar";
import contact from "./pages/contact";
import Contact from "./pages/contact";
import { Flip, ToastContainer, Zoom } from "react-toastify";
import Login from "./pages/Login";
import Register from "./pages/Register";

import UserProvider from "./components/context/user.provider";
import Home from "./components/users/home";
import Order from "./components/users/order";

import AdminDash from "./components/admin/AdminDash";
import AdminHome from "./components/admin/AdminHome";
import AddProduct from "./components/admin/AddProduct";




function App() {
  return (
    <UserProvider>
      {/* setting up routes */}

      <BrowserRouter>
        <ToastContainer 
        position="bottom-center"
        draggable 
        transition={Zoom} 
        closeOnClick/>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Dashboard />}>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />}>
              {" "}
            </Route>
            <Route path="aboutUser" element={<AboutUser />} />
            <Route path="order" element={<Order />} />
          </Route>

          {/* admin dashboard */}
          {/* <Route path="/admin" element={<AdminDashboard />}>
            <Route path="home" element={<AdminHome />}></Route>
            <Route path="add-product" element={<AddProduct />} />
          </Route> */}

          <Route path="/admin" element={<AdminDash/>}  > 
            <Route path="home" element={<AdminHome/>}   />
            <Route path="addProduct" element={<AddProduct/>} />


          </Route>
        
          
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
