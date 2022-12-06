import React, { useEffect, useState } from "react";
import "./App.css";
import Orders from "./components/Orders";
import Products from "./components/Products";

function App() {
  return (
    <div className={"App"}>
      <h1>SPICA CLOUD FUNCTION</h1>
      <Products />
      <Orders />
    </div>
  );
}

export default App;
