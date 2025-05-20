import React from 'react';
import CommonHedding from '../../Component/SharedComponent/Hedding/CommonHedding';
import CommonButton from '../../Component/SharedComponent/Button/CommonButton';
import FindPathname from '../../Hooks/FindPathname/FindPathname';

const ContactPage = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Con"} SecondPart={"tact"} PageLink={"/"}></CommonHedding>
            <FindPathname></FindPathname>
            <CommonButton ButtonName={"Home"} NavigateLink={"/"}></CommonButton>
        </div >
    );
};

export default ContactPage;
