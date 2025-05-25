import pic from '/phone.jpg'
const ProductCard = () => {
    return (
        <div>
            <div className='flex gap-5 flex-col max-w-60'>
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
            <div></div>
        </div>
    );
};

export default ProductCard;