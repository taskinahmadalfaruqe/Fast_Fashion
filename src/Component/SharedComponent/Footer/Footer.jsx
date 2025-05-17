import CommonButton from '../Button/CommonButton';

const Footer = () => {
    return (
        <div>
          <div className='my-3'>This IS Footer</div>
            <CommonButton ButtonName={"BDT"} NavigateLink={'/ProductPage'} />
        </div>
    );
};

export default Footer;