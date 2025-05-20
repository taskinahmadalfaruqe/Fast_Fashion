import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { handelDarkMood } from '../../DarkMood/DarkControl';

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
                ? "bg-White_Color p-1 px-3 rounded-md text-Black_Color"
                : "hover:text-White_Color dark:hover:text-Black_Color p-1 px-3 rounded-md"
        }
    >
        {label}
    </NavLink>
);

const DarkModeToggle = () => (
    <button
        onClick={handelDarkMood}
        className="relative group p-1 cursor-pointer rounded-full bg-Orange_Color text-White_Color border-[2px] border-White_Color"
    >
        <span className="dark:hidden relative">
            <MdDarkMode className="text-3xl font-bold" />
            <div className="absolute right-5 -bottom-10 mb-2 bg-Orange_Color text-White_Color text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Switch To Dark
            </div>
        </span>

        <span className="hidden dark:inline relative">
            <MdLightMode className="text-3xl font-bold" />
            <div className="absolute right-5 -bottom-10 mb-2 bg-Orange_Color text-White_Color text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Switch To Light
            </div>
        </span>
    </button>
);


const UserNavItems = (
    <>
        {navLinks.map(renderNavItem)}
    </>
);

const Navbar = () => {
    return (
        <div className="bg-Primary_Color dark:bg-Blue_color">
            <div className="container navbar">

                {/* Logo */}
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Fast Fashion</a>
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
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;