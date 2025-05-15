
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/SharedComponent/Footer/Footer';

const MainLayoute = () => {
    return (
        <div>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayoute;