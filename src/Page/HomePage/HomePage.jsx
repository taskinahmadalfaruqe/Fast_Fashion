import CommonButton from '../../Component/SharedComponent/Button/CommonButton';
import CommonHedding from '../../Component/SharedComponent/Hedding/CommonHedding';
import FindPathname from '../../Hooks/FindPathname/FindPathname';

const HomePage = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Ho"} SecondPart={"me"} PageLink={"/"}></CommonHedding>
            <FindPathname></FindPathname>
            <CommonButton ButtonName={"Home"} NavigateLink={"/"}></CommonButton>
        </div >
    );
};

export default HomePage;