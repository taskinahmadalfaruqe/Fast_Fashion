import { MdFavoriteBorder } from 'react-icons/md';
import pic from '/phone.jpg'
import { FaCartShopping, FaCodeCompare } from 'react-icons/fa6';
const ProductCard = () => {
    return (
        <div>
            <div className='flex gap-5 flex-col max-w-60 relative ProductCard'>
                <div className='bg-Card_Background_Color w-60 h-60 flex justify-center items-center p-5'>
                    <img src={pic} alt="Product Image" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h3>Product Name</h3>{/*product color  */}
                        <span>$88</span>{/*product price  */}
                    </div>
                    <p>Black</p> {/*product color  */}
                </div>

            </div>
            <div className='text-Gray_Color bg-White_Color absolute bottom-0 left-0 w-full hidden ProductCardOverflow'>
                <div className='flex gap-2 p-2 justify-end items-center hover:text-Black_Color   cursor-pointer'>
                    <span>Add to Wish List</span>
                    <span>
                        < MdFavoriteBorder></MdFavoriteBorder>
                    </span>
                </div>
                <div className='flex gap-2 p-2 justify-end items-center hover:text-Black_Color   cursor-pointer'>
                    <span>Compare</span>
                    <span>
                        <FaCodeCompare></FaCodeCompare>
                    </span>
                </div>
                <div className='flex gap-2 p-2 justify-end items-center hover:text-Black_Color   cursor-pointer'>
                    <span>Add to Cart</span>
                    <span>
                        <FaCartShopping></FaCartShopping>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;