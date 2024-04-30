import { Link } from "react-router-dom";
import { formatCurrency } from "../helpers/formatCurrency";
import { useCart, useCartDispatch } from "../store/cartContext";
import { CART_ACTIONS } from "../store/cartReducer";
import { getTotalPrice } from "../helpers/cartHelper";
import { AiFillDelete } from "react-icons/ai";

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
        <table className="w-[100%] border-collapse">
          <thead>
            <tr>
              <th className=" text-left p-2 border border-solid border-[#fff]">Product</th>
              <th className=" text-right ">Quantity</th>
              <th className="text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.product.id} className="product-row">
                <td className="product-head">
                  <img
                    src={cartItem.product.imageUrl}
                    alt={cartItem.product.name}
                    className="product-image"
                    width="60"
                    height="60"
                  />
                  <h4>
                    <Link to="#">{cartItem.product.name}</Link>
                  </h4>
                </td>
                <td className="product-data-cell">
                  <div className="product-quantity">
                    <button
                      className="btn-left"
                      onClick={() => handleDecrementQuantity(cartItem)}
                    >
                      -
                    </button>
                    <span className="product-quantity_value">
                      {cartItem.quantity}
                    </span>
                    <button
                      className="btn-right"
                      onClick={() => handleIncrementQuantity(cartItem)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(cartItem)}
                    className="delete-btn"
                  >
                    <AiFillDelete/>
                    {/* <img src={TrashIcon} alt="Remove" className="icon" /> */}
                  </button>
                </td>
                <td className="product-data-cell">
                  {formatCurrency(cartItem.product.price * cartItem.quantity)}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={3} className="total-cell">
                Total: &nbsp;
                <span className="total">
                  {formatCurrency(getTotalPrice(cartItems))}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };