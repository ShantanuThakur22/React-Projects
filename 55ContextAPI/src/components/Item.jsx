import React from 'react'
import { useCart } from '../Context/Cart'

function Item({name,price}) {

    const cart= useCart()
    console.log(cart)

    function handleClick(){
        cart.setItems([...cart.items,{name,price}])
    }
  return (
    <div>
      <h4>Item Name = {name}</h4>
      <h4>Price :{price}</h4>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  )
}

export default Item
