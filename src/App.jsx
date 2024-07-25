import { useState } from "react";
import "./App.css";
import { About, ProductList } from "./components/components";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <>
      <div className={`landing_page ${showProductList ? "fade-out" : ""}`}>
        <div className="bg-img"></div>
        <div className="content">
          <div className="hero_content">
            <h1>Welcome to Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button className="btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <About />
          </div>
        </div>
      </div>

      <div className={`productList-container ${showProductList ? "visible" : ""}`}>
        <ProductList/>
      </div>
    </>
  );
}

export default App;
