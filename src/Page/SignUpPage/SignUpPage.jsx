import Signup from '../../AuthProvider/SignUp/SignUp';
import CommonHedding from '../../Component/SharedComponent/CommonHedding/CommonHedding';
import FindPathname from '../../Hooks/FindPathname/FindPathname';

const SignUpPage = () => {
    return (
        <div className='container'>
            <CommonHedding FastPart={"Sign"} SecondPart={"Up"} PageLink={'User/SignUp'} />
            <FindPathname />
            <Signup></Signup>
        </div>
    );
};

export default SignUpPage;