import React from 'react';
import CommonHedding from './../../Component/SharedComponent/Hedding/CommonHedding';
import FindPathname from '../../Hooks/FindPathname/FindPathname';
import Signup from '../../AuthProvider/SignUp/SignUp';

const SignUpPage = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Sign"} SecondPart={"Up"} PageLink={'User/SignUp'} />
            <FindPathname />
            <Signup></Signup>
        </div>
    );
};

export default SignUpPage;