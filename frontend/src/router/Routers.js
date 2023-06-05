import React from "react";
// router dom untuk roting perpindahan halaman
import { Routes, Route, Navigate } from "react-router-dom";

// memanggil component pages
import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import TourDetails from "./../pages/TourDetails";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import Notfound from "../pages/Notfound";
import About from "../pages/About";
import TourList from "../components/Crud/TourList";
import AddTour from "../components/Crud/AddTour";
import EditTour from "../components/Crud/EditTour";
import Payment from "../components/Payment/Payment";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/list/:id" element={<TourList />} />
      <Route path="/add" element={<AddTour />} />
      <Route path="/edit/:id" element={<EditTour />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default Routers;
