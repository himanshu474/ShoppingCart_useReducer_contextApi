import { Outlet } from "react-router-dom";
import  Navbar  from "./Navbar";


export const Root = () => (
  <>
    <Navbar />
    <div className="max-w-screen-xl mx-auto my-0 px-10 py-0">
      <Outlet />
    </div>
  </>
);