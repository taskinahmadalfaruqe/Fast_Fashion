import React from 'react';
import ProductCard from '../../SharedComponent/ProductCard/ProductCard';
import CommonHedding from '../../SharedComponent/Hedding/CommonHedding';

const SpecialOffers = () => {
    return (
        <div  className='p-5 xl:p-0'>
            <CommonHedding FastPart={"Special"} SecondPart={" Offers"}></CommonHedding>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default SpecialOffers;