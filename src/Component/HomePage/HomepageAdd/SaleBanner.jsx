import CommonButton from "../../SharedComponent/Button/CommonButton";
import phone from "./../../../Assests/SellBord/phone.jpg";
import electronics from "./../../../Assests/SellBord/electronics.jpg";
import furniture from "./../../../Assests/SellBord/furniture.jpeg";

const SaleBanner = () => {
  const sales = [
    {
      title: "Phones Sale",
      discount: "30%",
      description: "Up to 30% sale for all phones!",
      image: "/src/Assests/SellBord/phone.jpg",
    },
    {
      title: "Electronics Sale",
      discount: "70%",
      description: "Up to 70% sale for all electronics!",
      image: "/src/Assests/SellBord/electronics.jpg",
    },
    {
      title: "Furniture Offer",
      discount: "50%",
      description: "Up to 50% sale for all furniture items!",
      image: "/src/Assests/SellBord/furniture.jpeg",
    },
  ];

  return (
    <div className="lg:mb-5">
      <div className="p-5 lg:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">

          {/* Left Part  */}
          <div className="p-5 lg:p-10 flex gap-5 lg:gap-8 flex-col rounded-md bg-Primary_Color dark:bg-Dark_BG_Color">
            <img
              src={sales[0].image}
              alt={sales[0].title}
              className="w-full  object-contain "
            />
            <div className="flex flex-col gap-2 md:gap-4 justify-around items-start">
              <h2 className="text-xl font-semibold">
                {sales[0].title}
              </h2>
              <p className="">
                {sales[0].description}
              </p>
              <CommonButton ButtonName={"Shop Now"} NavigateLink={"#"} />
            </div>
          </div>

          {/* right part  */}
          <div className="flex flex-col gap-2 lg:gap-10 ">
            {sales.slice(1).map((sale, index) => (
              <div
                key={index}
                className="p-5 rounded-lg flex flex-1 justify-around items-center shadow bg-Primary_Color dark:bg-Dark_BG_Color"
              >
                <div className="flex flex-col justify-start items-start gap-2">
                  <h2 className="text-xl font-semibold  mb-2">
                    {sale.title}
                  </h2>
                  <p className=" mb-2">
                    {sale.description}
                  </p>
                  <CommonButton ButtonName={"Shop Now"} NavigateLink={"#"} />
                </div>
                <img
                  src={sale.image}
                  alt={sale.title}
                  className="w-28 h-28 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SaleBanner;
