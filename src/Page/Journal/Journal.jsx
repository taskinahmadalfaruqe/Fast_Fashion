import React from 'react';
import CommonHedding from '../../Component/SharedComponent/Hedding/CommonHedding';
import FindPathname from '../../Hooks/FindPathname/FindPathname';
import CommonButton from '../../Component/SharedComponent/Button/CommonButton';

const Journal = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Jour"} SecondPart={"nal"} PageLink={"/"}/>
            <FindPathname/>
            <CommonButton ButtonName={"Home"} NavigateLink={"/"} />
        </div>
    );
};

export default Journal;