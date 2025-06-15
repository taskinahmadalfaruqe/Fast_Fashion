import BestSell from "../../Component/HomePage/BestSell/BestSell";
import SaleBanner from "../../Component/HomePage/HomepageAdd/SaleBanner";
import NewArival from "../../Component/HomePage/NewArival/NewArival";
import ProductOfTheYear from "../../Component/HomePage/ProductOfTheYear/ProductOfTheYear";
import SimpleSwiper from "../../Component/HomePage/Slider/Carousel";
import SpecialOffers from "../../Component/HomePage/SpecialOffers/SpecialOffers";

const HomePage = () => {
    return (
        <div className="container mx-auto flex flex-col lg:gap-8 ">
            {/* Swiper Section */}
            <div className="w-full pb-10 bg-Primary_Color dark:bg-Dark_BG_Color">
                <SimpleSwiper />
            </div>

            {/* SaleBanner Section */}
            <SaleBanner />

            {/* New Arival  */}
            <NewArival></NewArival>

            {/* Best Sell */}
            <BestSell></BestSell>

            {/* Product Of The Year */}
            <ProductOfTheYear></ProductOfTheYear>

            {/* Seacial Offers */}
            <SpecialOffers></SpecialOffers>

        </div>
    );
};

export default HomePage;
