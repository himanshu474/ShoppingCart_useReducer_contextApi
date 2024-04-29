const addItem = (state, item) =>
 {
  const newCartItems=[...state.cartItems]
  const itemIndex=newCartItems.findIndex(
    (cartItem)=>cartItem.product.id === item.product.id
  )
  
  //if item is already in the cart, don't update the state
if(itemIndex >-1){
    return {...state};
}

newCartItems.push({...item,quantity:1})
return {...state,cartItems:newCartItems }

  };
  
const removeItem = (state, item) => {
    const newCartItems = [...state.cartItems];
    const itemIndex = newCartItems.findIndex(
      (cartItem) => cartItem.product.id === item.product.id
    );
  
    // if item is not in cart, don't update the state
    if (itemIndex === -1) {
      return { ...state };
    }
  
    newCartItems.splice(itemIndex, 1);
    return { ...state, cartItems: newCartItems };
  };
  
const incrementQuantity = (state, item) => {
    const newCartItems = [...state.cartItems];
    const itemIndex = newCartItems.findIndex(
      (cartItem) => cartItem.product.id === item.product.id
    );
  
    // if item is not in cart, don't update the state
    if (itemIndex === -1) {
      return { ...state };
    }
  
    const newItem = { ...newCartItems[itemIndex] };
    newItem.quantity++;
    newCartItems[itemIndex] = newItem;
  
    return { ...state, cartItems: newCartItems };
  };
  
const decrementQuantity = (state, item) => {
    const newCartItems = [...state.cartItems];
    const itemIndex = newCartItems.findIndex(
      (cartItem) => cartItem.product.id === item.product.id
    );
  
    // if item is not in cart,don't update the state
    if (itemIndex === -1) {
      return { ...state };
    }
  
    const newItem = { ...newCartItems[itemIndex] };
    newItem.quantity--;
    newCartItems[itemIndex] = newItem;
  
    // if the decremented item quantity is 0, remove the item
    if (newCartItems[itemIndex].quantity === 0) {
      newCartItems.splice(itemIndex, 1);
    }
  
    return { ...state, cartItems: newCartItems };
  };
  
  export const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return addItem(state, action.payload);
      case "REMOVE_ITEM":
        return removeItem(state, action.payload);
      case "INCREMENT_QUANTITY":
        return incrementQuantity(state, action.payload);
      case "DECREMENT_QUANTITY":
        return decrementQuantity(state, action.payload);
      default:
        return state;
    }
  };
  