import { TiShoppingCart } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {Link,NavLink,useLocation} from 'react-router-dom'
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";


const Header = () => {
const[toggle,SetToggle]=useState(false);

const handleChange=()=>{
  SetToggle(!toggle)
}

  return (
    <nav className="bg-gray-600 border-gray-300 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between ">
            <h3 className="  text-white text-2xl font-bold ml-2">
              Shopping
              </h3>
            
              <div className="flex space-x-4">
        <div className="flex rounded-md overflow-hidden w-full">
          <input 
          type="search" placeholder=" Search a Product..." className="sm:hidden h-10 w-80 rounded-md rounded-r-none hover:border-black cursor-pointer" /> 
          <FaSearch className="sm:hidden hover:bg-green-600 text-3xl text-black h-10 bg-green-500 font-semibold rounded-r-md py-3"/>     
             </div>
      </div>
            <div className="flex items-center justify-content  ">
              {/* <NavLink className="flex flex-shrink-0 items-center mr-4" to='/'> */}
              {/* </NavLink> */}

            <button onClick={handleChange} className=" bg-green-500 hover:bg-green-400 text-white font-bold px-2 py-4rounded inline-flex">
            <TiShoppingCart className="text-4xl text-black "/>
              <options className=" text-red-700 inline-flex">10</options>
            <MdArrowDropDown className="text-xl text-black"/>
            {
            toggle && (
              <div className="card_details flex justify-center items-center" style={{ width: "24rem", padding: 10, position: "relative" }}>
              <i className="fas fa-close smallclose" onClick={handleChange} style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
              <p className="text-lg">Your cart is empty</p>
              
          </div>
              )
            }
        </button>
             </div>
     </div>
    </div>
    </nav>
  )
}

export default Header