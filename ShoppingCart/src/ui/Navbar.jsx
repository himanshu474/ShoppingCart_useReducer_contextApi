import { TiShoppingCart } from "react-icons/ti";
import {Link} from 'react-router-dom'
import { useCart} from '../store/cartContext'


const Navbar = () => {
const{cartItems} =useCart();

  return (
    <nav className="flex p-5 bg-[#fff] shadow-[0 0 1em #00000022]">
      <ul className="flex flex-row list-none m-[0 0 0 auto] p-0">
        <li className="m-[0 0 0 20px]">
          <Link to='/' >Products</Link>
        </li>
        <li className="m-[0 0 0 20px]">
          <Link to='/' className=" relative">
            {cartItems.length >0 && (
              <span className="absolute top-[-10px] right-[-10px]
               w-5 h-5 bg-sky-300 rounded-[50%]  ">{cartItems.length}</span>
            )}
            <TiShoppingCart className=" w-8 h-auto"/>
          </Link>

        </li>
      </ul>
    </nav>
  )
}

export default Navbar