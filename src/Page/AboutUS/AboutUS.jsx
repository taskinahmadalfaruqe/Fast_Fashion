import React from 'react';
import CommonHedding from '../../Component/SharedComponent/Hedding/CommonHedding';
import CommonButton from '../../Component/SharedComponent/Button/CommonButton';
import FindPathname from '../../Hooks/FindPathname/FindPathname';

const AboutUS = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Abo"} SecondPart={"ut"} PageLink={"/"}></CommonHedding>
            <FindPathname></FindPathname>
            <CommonButton ButtonName={"Home"} NavigateLink={"/"}></CommonButton>

        </div >
    );
};

export default AboutUS;