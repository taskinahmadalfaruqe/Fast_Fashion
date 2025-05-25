import React from 'react';
import CommonHedding from '../../Component/SharedComponent/Hedding/CommonHedding';
import FindPathname from '../../Hooks/FindPathname/FindPathname';
import CommonButton from '../../Component/SharedComponent/Button/CommonButton';
import Login from '../../Component/AuthPage/Login/Login';

const LoginPage = () => {
    return (
        <div className='container'>
           <CommonHedding FastPart={"Log"} SecondPart={"in"} PageLink={'/User/Login'}></CommonHedding>
           <FindPathname></FindPathname>
           <Login></Login>
        </div>
    );
};

export default LoginPage;