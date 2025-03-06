import { Link } from "react-router-dom";
import { formatCurrency } from "../helpers/formatCurrency";
import { useCart, useCartDispatch } from "../store/cartContext";
import { CART_ACTIONS } from "../store/cartReducer";
import { getTotalPrice } from "../helpers/cartHelper";
import { AiFillDelete } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";



export const Cart = () => {
    const { cartItems } = useCart();
    const dispatch = useCartDispatch();
  
    const handleIncrementQuantity = (cartItem) => {

        dispatch({
          type: CART_ACTIONS.INCREMENT_QUANTITY,
          payload: { ...cartItem },
        });
    };
  
    const handleDecrementQuantity = (cartItem) => {
        dispatch({
          type: CART_ACTIONS.DECREMENT_QUANTITY,
          payload: { ...cartItem },
        });
    };
  
    const handleRemoveItem = (cartItem) => {
        dispatch({
          type: CART_ACTIONS.REMOVE_ITEM,
          payload: {
            product: { ...cartItem.product },
            quantity: 0,
          },
        });
    };
  
    return (
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Shopping Cart</h1>
    
      <div className="overflow-x-auto bg-white shadow-2xl rounded-lg p-4">
        <table className="min-w-full table-auto border-separate border-spacing-4">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left p-4 text-sm font-medium text-gray-600">Product Description</th>
              <th className="text-right p-4 text-sm font-medium text-gray-600">Quantity</th>
              <th className="text-right p-4 text-sm font-medium text-gray-600">Price</th>
=======
       <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Shopping Cart</h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="text-left p-4 border-b text-sm font-medium">Product</th>
              <th className="text-right p-4 border-b text-sm font-medium">Quantity</th>
              <th className="text-right p-4 border-b text-sm font-medium">Price</th>
>>>>>>> 9df0a0b754da6c833dfed1b6a984fe7a36739c0e
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.product.id} className="border-b">
<<<<<<< HEAD
                <td className="flex flex-col sm:flex-row sm:space-x-4 items-start sm:items-center p-4 space-y-2 sm:space-y-0">
                  <img
                    src={cartItem.product.imageUrl}
                    alt={cartItem.product.name}
                    className="w-20 h-20 object-cover rounded-md shadow-md"
                  />
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800">{cartItem.product.description}</p>
                    <Link to="/" className="text-sm text-blue-600 hover:underline">
                      View Product
                    </Link>
                  </div>
                </td>
    
                <td className="text-right p-4">
                  <div className="flex items-center justify-end space-x-4">
=======
                <td className="flex items-center p-4 space-x-4">
                  <img
                    src={cartItem.product.imageUrl}
                    alt={cartItem.product.name}
                    className="w-20 h-auto object-cover rounded-md"
                  />
                  <Link to="/" className="text-lg font-semibold text-blue-600 hover:underline">
                    {cartItem.product.name}
                  </Link>
                </td>

                <td className="text-right p-4">
                  <div className="flex items-center justify-end space-x-2">
>>>>>>> 9df0a0b754da6c833dfed1b6a984fe7a36739c0e
                    <button
                      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                      onClick={() => handleDecrementQuantity(cartItem)}
                    >
                      <RiSubtractLine />
                    </button>
                    <span className="text-base font-medium px-5 py-2.5 border border-solid border-gray-300 rounded-md">
                      {cartItem.quantity}
                    </span>
                    <button
                      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                      onClick={() => handleIncrementQuantity(cartItem)}
                    >
                      <IoAddOutline />
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(cartItem)}
<<<<<<< HEAD
                    className="text-red-500 hover:text-red-700 mt-2 text-sm"
                  >
                    <AiFillDelete className="w-5 h-5 inline-block" />
                    Remove
                  </button>
                </td>
    
=======
                    className="text-red-500 hover:text-red-700 mt-2"
                  >
                    <AiFillDelete className="w-5 h-5" />
                  </button>
                </td>

>>>>>>> 9df0a0b754da6c833dfed1b6a984fe7a36739c0e
                <td className="text-right p-4 font-medium">
                  {formatCurrency(cartItem.product.price * cartItem.quantity)}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={3} className="text-right text-2xl p-6 font-semibold">
                Total:{" "}
                <span className="font-bold text-xl">
                  {formatCurrency(getTotalPrice(cartItems))}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
<<<<<<< HEAD
    
    
=======
>>>>>>> 9df0a0b754da6c833dfed1b6a984fe7a36739c0e
    );
  };
