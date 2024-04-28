export const isInCart = (cartItems, item) => {
    return cartItems.some((cartItem) => cartItem.product.id === item.id);
  };
  
  export const getTotalPrice = (cartItems) => {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
  };