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
      dispatch &&
        dispatch({
          type: CART_ACTIONS.INCREMENT_QUANTITY,
          payload: { ...cartItem },
        });
    };
  
    const handleDecrementQuantity = (cartItem) => {
      dispatch &&
        dispatch({
          type: CART_ACTIONS.DECREMENT_QUANTITY,
          payload: { ...cartItem },
        });
    };
  
    const handleRemoveItem = (cartItem) => {
      dispatch &&
        dispatch({
          type: CART_ACTIONS.REMOVE_ITEM,
          payload: {
            product: { ...cartItem.product },
            quantity: 0,
          },
        });
    };
  
    return (
      <>
        <h1>Cart</h1>
        <table className=" w-[100%] border-collapse text-right">
          <thead>
            <tr>
              <th className=" text-left p-4 border border-solid border-[#fff]">Product</th>
              <th className=" text-right p-4  border border-solid border-[#fff] ">Quantity</th>
              <th className="text-right p-4  border border-solid border-[#fff]">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.product.id} className=" px-0 py-1 border-none mr-4">
                <td className="flex items-center p-4">
                  <img
                    src={cartItem.product.imageUrl}
                    alt={cartItem.product.name}
                    className=" w-20 h-auto mr-2"
                    width="200"
                    height="200"
                  />
                  <h4>
                    <Link to="#">{cartItem.product.name}</Link>
                  </h4>
                </td>
                <td className="text-right">
                  <div className="flex items-center float-right">
                    <button
                      className="rounded-t-lg rounded-b-lg rounded-none"
                      onClick={() => handleDecrementQuantity(cartItem)}
                    >
                      <RiSubtractLine />
                    </button>
                    <span className="text-base text-center leading-[initial] m-0 px-5 py-2.5
                     border-y-[#242424] border-t border-solid border-b">
                      {cartItem.quantity}
                    </span>
                    <button
                      className="rounded-r-lg rounded-b-lg rounded-none"
                      onClick={() => handleIncrementQuantity(cartItem)}
                    >
                      <IoAddOutline />

                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(cartItem)}
                    className="mr-[15px] px-0 py-[5px] border-[none]"
                  >
                    <AiFillDelete/>
                    {/* <img src={TrashIcon} alt="Remove" className="icon" /> */}
                  </button>
                </td>
                <td className="text-right p-6">
                  {formatCurrency(cartItem.product.price * cartItem.quantity)}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={3} className="text-right text-2xl">
                Total: &nbsp;
                <span className=" font-bold p-6">
                  {formatCurrency(getTotalPrice(cartItems))}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };