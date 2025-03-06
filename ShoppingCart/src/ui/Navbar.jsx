import { TiShoppingCart } from "react-icons/ti";
import {Link} from 'react-router-dom'
import { useCart} from '../store/cartContext'


const Navbar = () => {
const{cartItems} =useCart();

  return (
     <nav className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Product Link */}
          <Link to="/" className="text-xl font-semibold text-gray-800">
            Products
          </Link>

          {/* Navbar Links */}
          <ul className="flex items-center space-x-6 text-lg font-medium text-gray-700">
            {/* Cart Link */}
            <li className="relative">
              <Link to="/cart" className="flex items-center space-x-2 hover:text-blue-500 transition-all duration-300">
                {cartItems.length > 0 && (
                  <span className="absolute top-[-8px] right-[-8px] bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
                <TiShoppingCart className="w-7 h-7" />
              </Link>
            </li>

{/*             {/* Additional Links (e.g., Home, About) */}
            <li>
              <Link to="/" className="hover:text-blue-500 transition-all duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition-all duration-300">
                About
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
