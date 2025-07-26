import React from 'react'
import CommonButton from '../CommonButton/CommonButton';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className='container'>
      <div className="ProductImage">

      </div>
      <div className="ProductDetails">
        <div>Product Name {id}</div>
        <div>Product Rating</div>
        <div>Product Price</div>
        <div>Product Color</div>
        <div>Product Sell</div>
        <div>Product Stock</div>
        <CommonButton ButtonName={"Add To Cart"} NavigateLink={"/"}></CommonButton>
        <CommonButton ButtonName={"Add To Fevorite"} NavigateLink={"/"}></CommonButton>
      </div>
    </div>
  )
}

export default ProductDetails;
