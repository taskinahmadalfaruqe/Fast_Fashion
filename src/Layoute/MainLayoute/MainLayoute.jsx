
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/SharedComponent/Footer/Footer';
import Navbar from '../../Component/SharedComponent/Navbar/Navbar';

const MainLayoute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayoute;