
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/SharedComponent/Footer/Footer';
import Navbar from '../../Component/SharedComponent/Navbar/Navbar';
import SearchNavbar from '../../Component/SharedComponent/SearchNavbar/SearchNavbar';

const MainLayoute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SearchNavbar></SearchNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayoute;