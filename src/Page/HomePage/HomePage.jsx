import SaleBanner from "../../Component/HomePage/HomepageAdd/SaleBanner";
import SimpleSwiper from "../../Component/HomePage/Slider/Carousel";

const HomePage = () => {
    return (
        <div className="container mx-auto">
            {/* Swiper Section */}
            <div className="relative z-10 w-full h-[400px]">
                <SimpleSwiper />
            </div>

            {/* SaleBanner Section */}
            <div className="relative z-14">
                <SaleBanner />
            </div>
        </div>
    );
};

export default HomePage;
