import CommonHedding from '../../SharedComponent/Hedding/CommonHedding';
import ProductCard from '../../SharedComponent/ProductCard/ProductCard';

const NewArival = () => {
    return (
        <div>
            <CommonHedding FastPart={"New"} SecondPart={" Arrivals"}></CommonHedding>
            <ProductCard></ProductCard>
        </div>
    );
};

export default NewArival;