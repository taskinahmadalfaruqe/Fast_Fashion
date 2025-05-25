import React from 'react';
import CommonHedding from './../../Component/SharedComponent/Hedding/CommonHedding';
import FindPathname from '../../Hooks/FindPathname/FindPathname';
import SignUp from '../../Component/AuthPage/SignUp/SignUp';

const SignUpPage = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Sign"} SecondPart={"Up"} PageLink={'User/SignUp'}/>
            <FindPathname />

            <SignUp />
        </div>
    );
};

export default SignUpPage;