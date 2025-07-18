import React from 'react';
import CommonHedding from '../../Component/SharedComponent/CommonHedding/CommonHedding';
import FindPathname from '../../Hooks/FindPathname/FindPathname';

const ProductPage = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={'Sh'} SecondPart={"op"}></CommonHedding>
            <FindPathname></FindPathname>
        </div>
    );
};

export default ProductPage;