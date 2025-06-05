import React from "react";
import { MdShoppingCart } from "react-icons/md";

const Cart = () => {
    return (
        <div>
            <button className="relative group p-1 px-4 pr- cursor-pointer rounded-md bg-Orange_Color text-White_Color border-[2px] border-White_Color ">
                <span className="">
                    <MdShoppingCart className="text-3xl font-bold" />
                    <div className="absolute right-5 -bottom-10 mb-2 bg-Orange_Color text-White_Color text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-[1000]">
                        Show All Cart Products
                    </div>
                </span>
                <div className="absolute -top-2 -right-2 text-[10px] font-bold flex justify-center items-center p-2 rounded-full h-7 w-7 bg-Orange_Color text-White_Color border-[2px] border-White_Color ">
                    100
                </div>
            </button>
        </div>
    );
};

export default Cart;
