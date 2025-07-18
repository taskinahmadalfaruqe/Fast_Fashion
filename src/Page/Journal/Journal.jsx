import FindPathname from '../../Hooks/FindPathname/FindPathname';
import CommonButton from '../../Component/SharedComponent/Button/CommonButton';
import CommonHedding from '../../Component/SharedComponent/CommonHedding/CommonHedding';

const Journal = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Jour"} SecondPart={"nal"} PageLink={"/"}/>
            <FindPathname/>
        </div>
    );
};

export default Journal;