import React from 'react';
import CommonHedding from '../../Component/SharedComponent/Hedding/CommonHedding';
import CommonButton from '../../Component/SharedComponent/Button/CommonButton';
import FindPathname from '../../Hooks/FindPathname/FindPathname';
import ContactForm from '../../Component/ContactComponent/ContactForm/ContactForm';
import Map from '../../Component/ContactComponent/Map/Map';

const ContactPage = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Con"} SecondPart={"tacts"} PageLink={"/"}></CommonHedding>
            <FindPathname></FindPathname>
            <CommonButton ButtonName={"Home"} NavigateLink={"/"}></CommonButton>
        {/* Contact Form */}
        <ContactForm/>
        {/* Map  */}
        <Map/>

        </div >
    );
};

export default ContactPage;
