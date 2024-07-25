import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between h-[10vh] max-w-6xl mx-auto">
        <NavLink to={"/"}>
          <div className="ml-5">
            <h1 className="text-blue-800 font-bold  text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wider">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </NavLink>
        <div className="flex items-center space-x-6 text-gray-800 font-semibold text-xl">
            <NavLink to={'/'} className={({isActive}) => `cursor-pointer border-b-4  ${isActive ? "border-b-4 border-blue-800" : "border-white"}`}>
                Home
            </NavLink>
            <NavLink to={'/cart'} className={({isActive}) => `cursor-pointer border-b-4 ${isActive ? "border-b-4 border-blue-800" : " border-white "}`}>
                Cart
            </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
