import React from "react";
import CommonButton from "../../SharedComponent/Button/CommonButton";

const SaleBanner = () => {
  const sales = [
    {
      title: "Phones Sale",
      discount: "30%",
      description: "Up to 30% sale for all phones!",
      image: "./../../../Assests/SellBord/phone.jpg",
    },
    {
      title: "Electronics Sale",
      discount: "70%",
      description: "Up to 70% sale for all electronics!",
      image: "./../../../Assests/SellBord/electronics.jpg",
    },
    {
      title: "Furniture Offer",
      discount: "50%",
      description: "Up to 50% sale for all furniture items!",
      image: "./../../../Assests/SellBord/furniture.jpeg",
    },
  ];

  return (
    <div className="bg-[#f5f5f5] dark:bg-[#262626] py-8 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg flex flex-col items-start justify-between shadow">
            <img src={sales[0].image} alt={sales[0].title} className="w-full h-60 object-contain mb-4" />
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">{sales[0].title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{sales[0].description}</p>
            <CommonButton ButtonName={"Shop Now"} NavigateLink={"#"} />
          </div>

          <div className="flex flex-col gap-4">
            {sales.slice(1).map((sale, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg flex items-center justify-between shadow">
                <div>
                  <h2 className="text-xl font-semibold text-black dark:text-white mb-2">{sale.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{sale.description}</p>
                  <CommonButton ButtonName={"Shop Now"} NavigateLink={"#"} />
                </div>
                <img src={sale.image} alt={sale.title} className="w-28 h-28 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SaleBanner;
