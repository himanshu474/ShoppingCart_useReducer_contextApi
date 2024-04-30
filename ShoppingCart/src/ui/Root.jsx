import { Outlet } from "react-router-dom";
import  Navbar  from "./Navbar";


export const Root = () => (
  <>
    <Navbar />
    <div className="app-container">
      <Outlet />
    </div>
  </>
);