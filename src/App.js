import "./styles.css";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState } from "react";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  var [products, setProducts] = React.useState([
    {
      id: "1",
      name: "Tea",
      qty: 0,
      price: 100,
      img:
        "https://cdn3d.iconscout.com/3d/premium/thumb/tea-4548634-3773222.png"
    },
    {
      id: "2",
      name: "Coffee",
      qty: 0,
      price: 200,
      img:
        "https://cdn4.vectorstock.com/i/1000x1000/89/93/3d-realistic-cup-of-coffee-beans-vector-21068993.jpg"
    },
    {
      id: "3",
      name: "Sandwitch",
      qty: 0,
      price: 150,
      img: "https://images-na.ssl-images-amazon.com/images/I/81Kyt3K64JL.png"
    },
    {
      id: "4",
      name: "Burger",
      qty: 0,
      price: 180,
      img: "https://images.pond5.com/big-hamburger-3d-096421613_iconl.jpeg"
    },
    {
      id: "5",
      name: "Pasta",
      qty: 0,
      price: 180,
      img:
        "https://www.marybethclark.com/shop/wp-content/uploads/2020/05/Fusilli-Lunghi-with-Shrimp-Cherry-Tomatoes-and-Avocado-Pesto.jpg"
    }
  ]);
  var [totalQty, setTotalQty] = React.useState(0);
  var [totalAmount, setTotalAmount] = React.useState(0);
  React.useEffect(() => {
    setTotalQty(products.reduce((tqty, item) => tqty + item.qty, 0));
    setTotalAmount(
      products.reduce((tamt, item) => tamt + item.qty * item.price, 0)
    );
  }, [products]);

  //onAdd
  const onAdd = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  //onRemove
  const onRemove = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  //onCheckOut
  const onCheckOut = () => {
    setProducts(
      products.map((item) => (item.qty > 0 ? { ...item, qty: 0 } : item))
    );
  };
  return (
    <Router>
      <div className="container">
        <Header tQty={totalQty} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {products.length > 0 ? (
                  <Products
                    items={products}
                    onAdd={onAdd}
                    onRemove={onRemove}
                  />
                ) : (
                  "No Products Available"
                )}
              </>
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                items={products}
                onRemove={onRemove}
                tQty={totalQty}
                tAmt={totalAmount}
                onCheckOut={onCheckOut}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
