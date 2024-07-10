import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "/src/componets/Footer.jsx";
import Header from "/src/componets/Header.jsx";
import AddProperty from "/src/pages/AddProperty.jsx";
import Bookings from "/src/pages/Bookings";
import Favourites from "/src/pages/Favourites";
import Home from "/src/pages/Home";
import Listing from "/src/pages/Listing";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/listing" element={<Listing />}/>
        <Route path="/addproperty" element={<AddProperty />}/>
        <Route path="/bookings" element={<Bookings />}/>
        <Route path="/favourites" element={<Favourites/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}