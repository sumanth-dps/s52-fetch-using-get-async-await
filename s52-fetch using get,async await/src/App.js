import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  let [electronics, setElectronics] = useState([]);
  let [products, setProducts] = useState([]);
  let getElectronicsFromServer = async () => {
    let opptions = {
      method: "GET",
    };
    let JSONData = await fetch(
      "https://api.escuelajs.co/api/v1/categories",
      opptions
    );
    let JSOData = await JSONData.json();
    setElectronics(JSOData);
    console.log(JSOData);
  };
  useEffect(() => {
    getElectronicsFromServer();
  }, []);

  let getProductsFromServer = async () => {
    let reqOptions = {
      method: "GET",
    };
    let JSONData = await fetch("https://fakestoreapi.com/products", reqOptions);
    let JSOData = await JSONData.json();
    setProducts(JSOData);
    console.log(JSOData);
  };
  useEffect(() => {
    getProductsFromServer();
  }, []);
  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          getProductsFromServer();
        }}
      >
        Get Products
      </button>
      <div className="productsContainer">
        {products.map((ele, i) => {
          return (
            <div className="productDiv">
              <img
                className="productPic"
                title={ele.description}
                src={ele.image}
              ></img>
              <p>{ele.title}</p>
              <p>Price :₹{ele.price}</p>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => {
          getElectronicsFromServer();
        }}
      >
        get electronics
      </button>
      <div className="productsContainer">
        {electronics.map((ele, i) => {
          return (
            <div className="productDiv">
              <img
                className="productPic"
                title={ele.description}
                src={ele.image}
              ></img>
              <p>{ele.name}</p>
              <p>Price :₹{ele.creationAt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
