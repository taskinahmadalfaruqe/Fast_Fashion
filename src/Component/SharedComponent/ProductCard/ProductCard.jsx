import { useState } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import pic from '/phone.jpg';
import { FaBangladeshiTakaSign, FaCartShopping, FaCodeCompare } from 'react-icons/fa6';

const ProductCard = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div
            className="relative group bg-Card_Background_Color dark:bg-Dark_BG_Color rounded-bl-2xl rounded-tr-2xl p-3 lg:p-5 flex gap-5 justify-center items-center flex-col"
            onClick={() => setShowMenu(prev => !prev)}
        >
            <div className='absolute top-8 left-8 bg-Orange_Color px-2 py-1 rounded-md text-White_Color z-50'>
                New
            </div>

            <div className='flex gap-5 flex-col'>
                <div className='w-64 max-h-64 flex justify-center items-center p-5 rounded-md bg-Card_Background_Color'>
                    {pic ? (
                        <img src={pic} alt="Product" className=" w-full h-full rounded-xl overflow-hidden" />
                    ) : (
                        <div className="animate-pulse bg-Card_Background_Color dark:bg-gray-700 w-full h-full rounded-md"></div>
                    )}
                </div>

                <div className='bg-Card_Background_Color dark:bg-Blue_color p-2 rounded-md'>
                    <div className='flex justify-between items-center'>
                        <h3>Product Name</h3>
                        <div className="flex gap-[2px] justify-center items-center">
                            <span><FaBangladeshiTakaSign /></span>
                            <span>88</span>
                        </div>
                    </div>
                    <p>Black</p>
                </div>
            </div>
            <div
                className={`text-Gray_Color dark:text-Primary_Color bg-Card_Background_Color dark:bg-Blue_color absolute bottom-1 right-1 w-fit ${showMenu ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                    } group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-in-out flex flex-col p-2 rounded-md`}
            >
                <div className='flex gap-2 p-2 justify-end items-center hover:text-Black_Color cursor-pointer'>
                    <span>Add to Wish List</span>
                    <MdFavoriteBorder />
                </div>
                <div className='flex gap-2 p-2 justify-end items-center hover:text-Black_Color cursor-pointer'>
                    <span>Compare</span>
                    <FaCodeCompare />
                </div>
                <div className='flex gap-2 p-2 justify-end items-center hover:text-Black_Color cursor-pointer'>
                    <span>Add to Cart</span>
                    <FaCartShopping />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
