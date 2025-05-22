import SaleBanner from "../../Component/HomePage/HomepageAdd/SaleBanner";
import SimpleSwiper from "../../Component/HomePage/Slider/Carousel";

const HomePage = () => {
    return (
        <div className='container'>
            <div className='h-[400px] w-full'>
                <SimpleSwiper></SimpleSwiper>
            </div>
            <SaleBanner></SaleBanner>
        </div >
    );
};

export default HomePage;