import React from "react";
import { MdShoppingCart } from "react-icons/md";

const Cart = () => {
    return (
        <div>
            <button className="relative group p-1 cursor-pointer rounded-full bg-Orange_Color text-White_Color border-[2px] border-White_Color ">
                <span className="">
                    <MdShoppingCart className="text-3xl font-bold" />
                    <div className="absolute right-5 -bottom-10 mb-2 bg-Orange_Color text-White_Color text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-[1000]">
                        Show All Cart Products
                    </div>
                </span>
                <div className="absolute -top-[6px] -right-3 -translate-y-[50%]   text-[10px] font-bold flex justify-center items-center p-2 rounded-full h-8 w-8 bg-White_Color text-Orange_Color border-[1px] border-Orange_Color">
                    1000
                </div>
            </button>
        </div>
    );
};

export default Cart;
