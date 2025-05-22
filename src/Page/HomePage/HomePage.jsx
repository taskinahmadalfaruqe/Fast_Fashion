import Carousel from '../../Component/HomePage/Slider/Carousel'

const HomePage = () => {
    return (
        <div className='container'>
            <div className='h-[70vh] w-full'>
                <Carousel className="h-full"></Carousel>
            </div>
           <SeleBanner></SeleBanner>
        </div >
    );
};

export default HomePage;