import {Link} from 'react-router-dom'
import {isInCart} from "../helpers/cartHelper"
import {formatCurrency} from '../helpers/formatCurrency'
import productMock from '../mock/productMock'
import{useCart,useCartDispatch} from '../store/cartContext'
import { CART_ACTIONS } from '../store/cartReducer'
import { useEffect,useState } from 'react'
import { IoAddOutline } from "react-icons/io5";


const ProductsList = () => {
const[products,setProducts]=useState([])
const dispatch=useCartDispatch();
const {cartItems}=useCart();

useEffect(()=>{
    const fetchProducts=async()=>{
        const products= await Promise.resolve(productMock)
        setProducts(products);
    }
    fetchProducts()
},[])

const handleAddToCart=(product)=>{
dispatch && dispatch({
    type:CART_ACTIONS.ADD_ITEM,
    payload:{
        product,
        quantity:1
    },
})
}


  return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-6 p-5"> 

{products.map((product) => (
    <li
      key={product.id}
      className="flex flex-col bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400 border-2 border-gray-200"
    >
      {/* Image Section with Gradient Overlay */}
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-t-lg"></div>
      </div>

      {/* Card Content Section */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition duration-200">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{product.description}</p>
        <p className="text-lg font-bold text-gray-900 mt-2">{formatCurrency(product.price)}</p>

        {/* Conditional Cart Button or Link */}
        {isInCart(cartItems, product) ? (
          <Link
            to="/cart"
            className="mt-3 text-center text-sm text-blue-600 hover:underline"
          >
            Added to Cart
          </Link>
        ) : (
          <button
            className="mt-3 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
            onClick={() => handleAddToCart(product)}
          >
            <IoAddOutline className="inline-block mr-2" />
            Add to Cart
          </button>
        )}
      </div>
    </li>
  ))}
</ul>

  
  
  
  
  )
}

export default ProductsList