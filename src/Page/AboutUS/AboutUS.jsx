import FindPathname from '../../Hooks/FindPathname/FindPathname';
import AboutComponent from '../../Component/AboutComponent/AboutComponent';
import CommonHedding from '../../Component/SharedComponent/CommonHedding/CommonHedding';

const AboutUS = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Abo"} SecondPart={"ut"} PageLink={"/"}></CommonHedding>
            <FindPathname></FindPathname>

            <AboutComponent></AboutComponent>

        </div >
    );
};

export default AboutUS;