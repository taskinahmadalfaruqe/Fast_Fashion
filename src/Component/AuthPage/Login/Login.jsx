import React from 'react';
import CommonButton from '../../SharedComponent/Button/CommonButton';
import CommonHedding from '../../SharedComponent/Hedding/CommonHedding';

const Login = () => {
  return (
    <div className="px-4 py-10 md:px-8 lg:px-16 max-w-6xl mx-auto space-y-16 ">

      {/* Intro Text */}
      <p className="text-sm text-Gray_Color dark:text-White_Color text-center md:text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry’s standard dummy text ever since this.
      </p>

      {/* Returning Customer Section */}
      <section className="border-b pb-10">
        <CommonHedding FastPart={"Returning"} SecondPart={" Customer"} />
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="company@domain.com"
              className="w-full border-b border-b-Gray_Color rounded-sm px-3 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder='Password'
              className="w-full  border-b border-b-Gray_Color rounded-sm px-3 py-2 focus:outline-none "
              required
            />
          </div>

          {/* Login Button */}
          <div className="md:col-span-2">
           <CommonButton ButtonName={"Log in"} />
          </div>
        </form>
      </section>

      {/* New Customer Section */}
      <section className="pt-4 ">
        <CommonHedding FastPart={"New"} SecondPart={" Customer"} />
        <p className="text-sm text-Gray_Color dark:text-White_Color mb-6 max-w-3xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry’s standard dummy text ever since this.
        </p>
       <CommonButton ButtonName={"Continue"} />
      </section>
    </div>
  );
};

export default Login;
