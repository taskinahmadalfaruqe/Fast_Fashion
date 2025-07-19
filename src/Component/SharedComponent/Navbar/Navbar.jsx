import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from '../../NavbarCoponets/DarkMood/DarkControl';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/ProductPage', label: 'Shop' },
    { to: '/AboutUS', label: 'AboutUS' },
    { to: '/ContactPage', label: 'Contact' },
    { to: '/Journal', label: 'Journal' },
    { to: '/User/Login', label: 'Login' },
    { to: '/auth/newUser/signUpPage', label: 'Signup' },
];

const renderNavItem = ({ to, label }) => (
    <NavLink
        key={to}
        to={to}
        className={({ isActive }) =>
            isActive
                ? "p-1 px-3 rounded-md text-Black_Color"
                : "text-Gray_Color hover:text-Black_Color dark:text-White_Color dark:hover:text-Black_Color p-1 px-3 rounded-md"
        }
    >
        {label}
    </NavLink>
);
const UserNavItems = (
    <>
        {navLinks.map(renderNavItem)}
    </>
);

const Navbar = () => {
    return (
        <div className="bg-White_Color dark:bg-Blue_color py-1 border-b-2 border-Primary_Color dark:border-White_Color">
            <div className="container navbar p-0 m-0 flex justify-between items-center" style={{ marginBottom: 0 , minHeight:"30px"}}>
                {/* Logo */}
                <div className="navbar-start w-fit">
                    <a href="/" className='w-14 h-10'>
                    <img src="/logo.png" alt="logo" />
                    </a>
                </div>

                <div className="navbar-end flex gap-3 items-center">
                    {/* Mobile Menu */}
                    <div className='lg:hidden'>
                        <DarkModeToggle />
                    </div>
                    <div className="dropdown dropdown-end lg:hidden">
                        <button className="btn btn-ghost btn-circle bg-Orange_Color border-[1px] border-White_Color text-White_Color text-">
                            <FaBars className="text-xl" />
                        </button>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-Primary_Color dark:bg-Blue_color rounded-box mt-3 w-52 p-2 shadow  z-10"
                        >
                            {UserNavItems}
                        </ul>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-2 text-Black_Color dark:text-White_Color font-semibold uppercase text-base">
                        {UserNavItems}
                        <DarkModeToggle></DarkModeToggle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;