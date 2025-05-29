import { MdFavoriteBorder } from 'react-icons/md';
import pic from '/phone.jpg';
import { FaCartShopping, FaCodeCompare } from 'react-icons/fa6';

const ProductCard = () => {
    return (
        <div className="relative max-w-60 group">
            <div className='flex gap-5 flex-col ProductCardOverflow'>
                <div className='bg-Card_Background_Color w-60 h-60 flex justify-center items-center p-5'>
                    <img src={pic} alt="Product Image" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h3>Product Name</h3>
                        <span>$88</span>
                    </div>
                    <p>Black</p>
                </div>
            </div>

            {/* Hover Menu with Transitions */}
            <div className='text-Gray_Color bg-White_Color absolute bottom-0 left-0 w-full opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-in-out flex flex-col'>
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
