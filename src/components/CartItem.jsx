import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/CartSlice";

function CartItem({ cartItem }) {

    const dispatch = useDispatch()

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(cartItem.id))
    }

  return (
    <>
      <div className="flex items-center p-5 justify-between w-[450px]  mt-2 mb-2 rounded-xl border-2 border-blue-800">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            className="h-28 rounded-lg"
            alt={cartItem?.title}
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-sm truncate w-20 font-bold">{cartItem?.title}</h1>
            <p className="text-green-500 font-semibold text-lg">{cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-blue-900 text-white border-2 rounded-lg text-sm font-bold p-4"
          >
            Remove From cart
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
