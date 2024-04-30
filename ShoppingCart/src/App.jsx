import { createBrowserRouter, RouterProvider } from "react-router-dom";

import  ProductsList  from "./products/ProductsList";
import { Cart } from "./cart/Cart";
import { CartProvider } from "./store/cartContext";
import { Root } from "./ui/Root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <ProductsList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const initialCartState = {
  cartItems: [],
};

const App = () => {
  return (
    <>
    
    
    <CartProvider cartValue={initialCartState}>
    <RouterProvider router={router} />
  </CartProvider>
    </>
  )
}

export default App