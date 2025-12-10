import FindPathname from '../../Hooks/FindPathname/FindPathname';
import CommonHedding from '../../Component/SharedComponent/CommonHedding/CommonHedding';

const Feedback = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Feed"} SecondPart={"back"} PageLink={"/"}/>
            <FindPathname/>
        </div>
    );
};

export default Feedback;