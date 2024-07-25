import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const [totalCartValue, setTotalCartValue] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCartValue(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCartValue);

  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
          <div className="min-h-[90vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartItem cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className="w-[300px]">
          <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
            <h1 className="font-bold text-lg text-blue-800">Your Cart Summary</h1>
            <p>
              <span className="text-gray-800 font-bold">Total Items</span>
              <span>: {cart.length}</span>
            </p>
            <p>
              <span className="text-gray-800 font-bold">Total Amount</span>
              <span>: {totalCartValue}$</span>
            </p>
          </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty!
          </h1>
          <NavLink
            to={"/"}
            className="bg-blue-800 text-white border-2 border-black rounded-lg font-bold p-3 px-4"
          >
            Shop Now
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
