import React from "react";
import { useCart } from "../Context/Cart";

function Cart() {
  const cartAdd = useCart()
  return (
    <div>
      <h1>Cart</h1>
      <li>Macbook pro= $10000</li>
      <p>Total Bill</p>
      {cartAdd.items.map((data) => (
        <div>
          <li>Item:{data.name}- {data.price}</li>
          
        </div>
      ))}
      <h1>Total Bill:{cartAdd.items.reduce((acc,current)=> acc+current.price,0)}</h1>
    </div>
  );
}

export default Cart;
