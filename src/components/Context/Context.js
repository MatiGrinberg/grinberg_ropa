import React,{useContext, useState} from 'react'

// CartContext
export const CartContext = React.createContext(); 

export function useCart() {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) =>{

const [cartItems,setCartItems] = useState([]);

  return(
    <CartContext.Provider
      value={
        {cartItems, setCartItems}
      }>
      {children}
    </CartContext.Provider>
  )
}

