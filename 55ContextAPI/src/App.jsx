import { useContext, useState } from 'react'
import Item from './components/Item'
import Cart from './components/Cart'
import { CartProvider } from './Context/Cart'


function App() {
  

  return (
    <CartProvider>
      
     <Item name="MAcBook" price={10000}/>
     <Item name="Pendrive" price={20000}/>
     <Item name="Mobile" price={112130}/>
     <br />
     <Cart/>
    </CartProvider>
  )
}

export default App
