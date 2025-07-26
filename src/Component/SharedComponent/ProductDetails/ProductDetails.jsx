import React from 'react'
import CommonButton from '../CommonButton/CommonButton';

const ProductDetails = () => {
  return (
    <div>
      <div className="ProductImage">

      </div>
      <div className="ProductDetails">
        <div>Product Name</div>
        <div>Product Rating</div>
        <div>Product Price</div>
        <div>Product Color</div>
        <div>Product Sell</div>
        <div>Product Stock</div>
        <CommonButton></CommonButton>
      </div>
    </div>
  )
}

export default ProductDetails;
