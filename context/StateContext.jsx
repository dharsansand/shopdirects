'use client';
import React, { createContext, useContext, useState } from 'react';




// Create the context
const Context = createContext();

// Create the StateContext provider component
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false); // Manage cart visibility
  const [cartItems, setCartItems] = useState([]); // Manage cart items
  const [totalPrice, setTotalPrice] = useState(0); // Manage total price
  const [totalQuantities, setTotalQuantities] = useState(0); // Manage total quantities
  const [qty, setQty] = useState(1);
  let foundProduct;
  let index;
  // Manage the quantity of an item in the cart

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    // Update total price and quantity
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          };
        }
        return cartProduct; // return the other items unchanged
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }


  };


  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }



  // Increment the quantity
  const incQty = () => setQty((prevQty) => prevQty + 1);

  // Decrement the quantity (but not below 1)
  const decQty = () => setQty((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1));

  // Return the context provider
  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// Custom hook to use the context in components
export const useStateContext = () => useContext(Context);
