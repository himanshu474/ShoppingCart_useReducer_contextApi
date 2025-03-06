import { createBrowserRouter, RouterProvider } from "react-router-dom";

import  ProductsList  from "./products/ProductsList";
import { Cart } from "./cart/Cart";
import { CartProvider } from "./store/cartContext";
import { Root } from "./ui/Root";
import About from "./ui/About";
import ContactUs from "./ui/ContactUs";


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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
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