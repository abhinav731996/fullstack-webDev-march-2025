import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

function StoreProvider({ children }) {

  //  LocalStorage se load
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  //  Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  //  ADD TO CART (Qty logic)
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  //  REMOVE
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //  QTY CONTROL
  const updateQty = (id, type) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : item.qty - 1,
            }
          : item
      )
    );
  };

  //  WISHLIST TOGGLE
  const toggleWishlist = (product) => {
    const exist = wishlist.find((item) => item.id === product.id);

    if (exist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };
  
  // Remove 
   const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };



  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQty,
        toggleWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;