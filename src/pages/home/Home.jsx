import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";
import "./home.css";
import { useState } from "react";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Hotel from "../hotel/Hotel";
import "./home.css";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
function Home() {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse By Property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guests Love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
