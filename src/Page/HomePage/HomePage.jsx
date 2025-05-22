import CommonButton from '../../Component/SharedComponent/Button/CommonButton';
import CommonHedding from '../../Component/SharedComponent/Hedding/CommonHedding';
import FindPathname from '../../Hooks/FindPathname/FindPathname';
import Carousel from '../../Component/Slider/Carousel' 

const HomePage = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Ho"} SecondPart={"me"} PageLink={"/"}></CommonHedding>
            <FindPathname></FindPathname>
            <CommonButton ButtonName={"Home"} NavigateLink={"/"}></CommonButton>
            
            <div className='h-[400px] w-full mt-3'>
               <Carousel></Carousel>
            </div>
        </div >
    );
};

export default HomePage;