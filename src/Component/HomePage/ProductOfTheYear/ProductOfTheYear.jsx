import CommonButton from '../../SharedComponent/Button/CommonButton';
import phone from '/phone.jpg';
const ProductOfTheYear = () => {
    return (
        <div className='flex gap-5 justify-between items-center h-[200px] p-10 bg-Primary_Color'>
            <div className='h-full'>
                <img className='h-full' src={phone} alt="BestProduct" />
            </div>
            <div className='flex flex-col gap-5 justify-between items-start max-w-xl'>
                <h2>Phone of the year</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                <CommonButton ButtonName={"Shop Now"} NavigateLink={"/"}></CommonButton>
            </div>
        </div>
    );
};

export default ProductOfTheYear;