import React from 'react';
import ProductCard from '../../SharedComponent/ProductCard/ProductCard';
import CommonHedding from '../../SharedComponent/Hedding/CommonHedding';

const SpecialOffers = () => {
    return (
        <div>
            <CommonHedding FastPart={"Special"} SecondPart={" Offers"}></CommonHedding>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default SpecialOffers;