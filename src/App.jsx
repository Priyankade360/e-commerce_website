import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "././Pages/About/About";
import Products from "././Pages/Products/Products";
import Contact from "././Pages/Contact/Contact";
import Cart from "././Pages/Cart/Cart";
import SingleProduct from "././Pages/SingleProduct/SingleProduct";
import Errorpage from "./Pages/Errorpage/Errorpage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
  tab: "'Roboto', sans-serif",
  colors: {
    heading: "#18181d",
    text: "#51545f",
    white: "#fff",
    black: "#212529",
    helper: "#8490ff",
    bg: "#f6f8fa",
    btn: "#6254f3",
    border: "rgba(98, 84, 243, 0.5)",
    shadow: "rgba(0, 0, 0, 0.02)",
    shadowSupport: "rgba(0, 0, 0, 0.16)",
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
};


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
