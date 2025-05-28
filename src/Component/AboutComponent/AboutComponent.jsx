import React from 'react';
import CommonButton from '../SharedComponent/Button/CommonButton';
import CommonHedding from '../SharedComponent/Hedding/CommonHedding';

const AboutComponent = () => {
  return (
    <div className="px-4 py-10 md:px-8 lg:px-16 max-w-7xl mx-auto space-y-20">
      {/* Top Image Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center text-center space-y-4 bg-Primary_Color dark:bg-Dark_BG_Color">
          <img
            src="./public/phone.jpg" 
            alt="Our Brands"
            className="items-center h-80 w-80s max-w-xs object-contain"
          />
          <CommonButton ButtonName="Our Brands" />
        </div>
        <div className="flex flex-col items-center text-center space-y-4 bg-Primary_Color dark:bg-Dark_BG_Color">
          <img
            src="./public/electronics.jpg" 
            alt="Our Stores"
            className="h-80 w-80 max-w-xs object-contain items-center"
          />
          <CommonButton ButtonName="Our Stores" />
        </div>
      </div>

      {/* Tagline */}
      <p className="text-center text-lg md:text-xl text-Black_Color dark:text-White_Color">
        Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating
        the essence of classic Worldwide cool looking style.
      </p>

      {/* Three Columns Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-2">
          <CommonHedding FastPart="Our" SecondPart=" Vision" />
          <p className="text-sm text-Gray_Color dark:text-White_Color">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </p>
        </div>

        <div className="space-y-2">
          <CommonHedding FastPart="Our" SecondPart=" Story" />
          <p className="text-sm text-Gray_Color dark:text-White_Color">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </p>
        </div>

        <div className="space-y-2">
          <CommonHedding FastPart="Our" SecondPart=" Brands" />
          <p className="text-sm text-Gray_Color dark:text-White_Color">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;