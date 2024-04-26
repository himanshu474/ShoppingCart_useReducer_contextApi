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
          type="search" placeholder=" Search a Product..." className="sm:hidden h-10 w-80 rounded-md rounded-r-none" /> 
          <FaSearch className="sm:hidden hover:bg-green-600 text-3xl text-black h-10 bg-green-500 font-semibold rounded-r-md py-3"/>     
             </div>
      </div>
            <div className="flex items-center justify-content  ">
              {/* <NavLink className="flex flex-shrink-0 items-center mr-4" to='/'> */}
              {/* </NavLink> */}

            <button onClick={handleChange} className=" bg-green-500 hover:bg-green-400 text-white font-bold px-2 py-4rounded inline-flex">
            <TiShoppingCart className="text-4xl text-black "/>
              <options className=" text-red-700">10</options>
            <MdArrowDropDown className="text-xl text-black"/>
            {toggle && (
      <div className="flex-col flex items-center fixed inset-0 left-1/4 bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="absolute right-16 top-10">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={handleChange}
          >
            Close
          </button>
      </div>
      </div>
          )}
        </button>
             </div>
     </div>
    </div>
    </nav>
  )
}

export default Header