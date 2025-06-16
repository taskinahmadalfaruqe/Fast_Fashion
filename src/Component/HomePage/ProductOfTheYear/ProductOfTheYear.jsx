import CommonButton from '../../SharedComponent/Button/CommonButton';
import phone from '/phone.jpg';
const ProductOfTheYear = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 justify-between items-center md:h-[200px] p-5 lg:p-5 bg-Card_Background_Color dark:bg-Dark_BG_Color rounded-bl-xl rounded-tr-xl overflow-hidden'>
            <div className='h-full flex-1 flex justify-center items-center '>
                <img className='h-full rounded-bl-md rounded-tr-md overflow-hidden' src={phone} alt="BestProduct" />
            </div>
            <div className='flex flex-col flex-1 gap-4 justify-between items-start xl:max-w-xl'>
                <h2 className='text-3xl font-bold'>Product of the year</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                <CommonButton ButtonName={"Shop Now"} NavigateLink={"/AboutUS"}></CommonButton>
            </div>
        </div>
    );
};

export default ProductOfTheYear;