import {Link} from 'react-router-dom'
import {isInCart} from "../helpers/cartHelper"
import {formatCurrency} from '../helpers/formatCurrency'
import productMock from '../mock/productMock'
import{useCart,useCartDispatch} from '../store/cartContext'
import { CART_ACTIONS } from '../store/cartReducer'
import { useEffect,useState } from 'react'

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
    <ul className=' flex flex-row flex-wrap justify-center p-5'>
        {products.map((product)=>(
            <li key={product.id} className='flex flex-col w-[300px] 
            mt-0 ml-0 mr-5 mb-5 p-5 bg-[#fff] shadow-[0 0 16px #eee]'>
                <img
                src={product.imageUrl}
                alt={product.name}
                width="300"
                height="300"
                />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{formatCurrency(product.price)}</p>
                {isInCart(cartItems,product)?(
                    <Link to='/cart'>Added to Cart</Link>
                ):(
                    <button className='border-lg py-2.5 px-5 font-medium 
                    text-base font-sans cursor-pointer bg-[#fff] 
                    border border-solid border-[#242424]
                    hover:bg-blue-400 focus:outline-4 focus:auto 
                    focus:ring-0 focus-visible:outline-4 
                    ' 
                    onClick={()=> handleAddToCart(product)}>
                        +
                    </button>
                )}
            </li>  
        ))}
    </ul>
  )
}

export default ProductsList