import React from 'react';
import CommonHedding from './../../Component/SharedComponent/Hedding/CommonHedding';
import FindPathname from '../../Hooks/FindPathname/FindPathname';

const SignUpPage = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Sign"} SecondPart={"Up"} PageLink={'User/SignUp'}/>
            <FindPathname />

            signup page
        </div>
    );
};

export default SignUpPage;