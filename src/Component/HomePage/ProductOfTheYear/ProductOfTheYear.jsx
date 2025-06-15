import phone from '/phone.jpg';
const ProductOfTheYear = () => {
    return (
        <div className='flex gap-5 justify-between items-center h-[200px] p-10 bg-Primary_Color'>
            <div className='h-full'>
                <img className='h-full' src={phone} alt="BestProduct" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default ProductOfTheYear;