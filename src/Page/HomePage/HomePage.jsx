import SaleBanner from "../../Component/HomePage/HomepageAdd/SaleBanner";
import SimpleSwiper from "../../Component/HomePage/Slider/Carousel";

const HomePage = () => {
    return (
        <div className="container mx-auto flex flex-col lg:gap-8 ">
            {/* Swiper Section */}
            <div className="w-full py-10 bg-Primary_Color dark:bg-Dark_BG_Color">
                <SimpleSwiper />
            </div>

            {/* SaleBanner Section */}
            <SaleBanner />

        </div>
    );
};

export default HomePage;
