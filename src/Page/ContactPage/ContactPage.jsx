import React from 'react';
import FindPathname from '../../Hooks/FindPathname/FindPathname';
import ContactForm from '../../Component/ContactComponent/ContactForm/ContactForm';
import Map from '../../Component/ContactComponent/Map/Map';
import CommonHedding from '../../Component/SharedComponent/CommonHedding/CommonHedding';

const ContactPage = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Con"} SecondPart={"tacts"} PageLink={"/"}></CommonHedding>
            <FindPathname></FindPathname>
        {/* Contact Form */}
        <ContactForm/>
        {/* Map  */}
        <Map/>

        </div >
    );
};

export default ContactPage;
