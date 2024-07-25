import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/CartSlice";

function ProductCard({product}) {
  const dispatch = useDispatch()
  const {cart} = useSelector(state=> state)

  function handleAddToCart() {
    dispatch(addToCart(product))
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id))
  }

  return (
      <div className="group flex flex-col items-center border-2 border-blue-800 gap-3 p-4  mt-10 ml-5 rounded-xl ">
          <div className="h-[120px]">
              <img className="w-full h-full object-cover" src={product?.image} alt={product?.title} />
          </div>
          <h1 className="w-40 truncate  text-gray-700 font-bold text-lg">{product?.title}</h1>
          <div className="flex flex-col items-center justify-center w-full gap-2 ">
            <p className="text-green-500 font-semibold text-lg">{product?.price}$</p>
            <button onClick={cart.some(item => item.id === product.id) ? handleRemoveFromCart : handleAddToCart} className="bg-blue-800 text-white border-2 border-black rounded-lg font-bold p-3 px-4">
              {cart.some(item => item.id === product.id) ? "Remove From Cart" : "Add To Cart"}
            </button>
          </div>
      </div>
  )
}

export default ProductCard;
