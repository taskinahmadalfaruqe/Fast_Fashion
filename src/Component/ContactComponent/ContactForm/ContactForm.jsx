import React from 'react';
import CommonHedding from '../../SharedComponent/Hedding/CommonHedding';
import CommonButton from '../../SharedComponent/Button/CommonButton';

const ContactForm = () => {
    return (
          <div className="px-4 py-10 md:px-8 lg:px-16 max-w-6xl mx-auto space-y-16 ">
       
             {/* Intro Text */}
             <p className="text-sm text-Gray_Color dark:text-White_Color text-center md:text-left">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
               been the industry’s standard dummy text ever since this.
             </p>
       
             {/* Returning Customer Section */}
             <section className="border-b pb-10">
               <CommonHedding FastPart={"Fill up "} SecondPart={" a Form"} />
       
               <form className="p-4 gap-10 max-w-3xl">
               
       
       
                 {/* Name Field */}
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                     Name
                   </label>
                   <input
                     type="name"
                     id="name"
                     placeholder=' your name here'
                     className="w-full  border-b border-b-Gray_Color rounded-sm px-3 py-2 focus:outline-none "
                     required
                   />
                 </div>

                   {/* Email Field */}
                 <div>
                   <label htmlFor="email" className=" pt-6 block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                     Email 
                   </label>
                   <input
                     type="email"
                     id="email"
                     placeholder="Your email here"
                     className="w-full border-b border-b-Gray_Color rounded-sm px-3 py-2 focus:outline-none"
                     required
                   />
                 </div>

                  {/* Massage Field */}
                 <div>
                   <label htmlFor="Message" className="pt-6 block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                     Message
                   </label>
                   <input
                     type="message"
                     id="message"
                     placeholder='Your message here'
                     className="w-full  border-b border-b-Gray_Color rounded-sm px-3 py-2 focus:outline-none "
                     required
                   />
                 </div>
       
                 {/* Login Button */}
                 <div className="pt-10">
                   <CommonButton ButtonName={"Post"} />
                 </div>
               </form>
             </section>
       
           </div>
    );
};

export default ContactForm;