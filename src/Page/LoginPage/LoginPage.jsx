import Login from "../../AuthProvider/Login/Login";
import CommonHedding from "../../Component/SharedComponent/CommonHedding/CommonHedding";
import FindPathname from "../../Hooks/FindPathname/FindPathname";

const LoginPage = () => {
    return (
        <div className='container'>
           <CommonHedding FastPart={"Log"} SecondPart={"in"} PageLink={'/User/Login'}></CommonHedding>
           <FindPathname></FindPathname>
           <Login></Login>
        </div>
    );
};

export default LoginPage;