import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const UserNavItems = (
    <div className="flex flex-col gap-1 lg:flex-row justify-start lg:justify-center lg:items-center font-semibold  uppercase text-base text-Black_Color">

        {/* Home Page  */}
        <NavLink
            to={"/"}
            className={({ isActive }) =>
                isActive
                    ? "bg-White_Color  p-1 px-3 rounded-md"
                    : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
            }
        >
            Home
        </NavLink>

        {/* Product Route  */}
        <NavLink
            to={"/ProductPage"}
            className={({ isActive }) =>
                isActive
                    ? "bg-White_Color  p-1 px-3 rounded-md"
                    : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
            }
        >
            Shop
        </NavLink>

        {/* about us  */}
        <NavLink
            to={"/AboutUS"}
            className={({ isActive }) =>
                isActive
                    ? "bg-White_Color  p-1 px-3 rounded-md"
                    : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
            }
        >
            AboutUS
        </NavLink>

        {/* Contact Page  */}
        <NavLink
            to={"/ContactPage"}
            className={({ isActive }) =>
                isActive
                    ? "bg-White_Color  p-1 px-3 rounded-md"
                    : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
            }
        >
            Contact
        </NavLink>

        {/* Journal  */}
        <NavLink
            to={"/Journal"}
            className={({ isActive }) =>
                isActive
                    ? "bg-White_Color  p-1 px-3 rounded-md"
                    : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
            }
        >
            Journal
        </NavLink>

        {/* login Page  */}
        <NavLink
            to={"/user/login"}
            className={({ isActive }) =>
                isActive
                    ? "bg-White_Color  p-1 px-3 rounded-md"
                    : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
            }
        >
            Login
        </NavLink>

        {/* Signup Page  */}
        <NavLink
            to={"/auth/newUser/signUpPage"}
            className={({ isActive }) =>
                isActive
                    ? "bg-White_Color  p-1 px-3 rounded-md"
                    : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
            }
        >
            Signup
        </NavLink>
    </div>
);

const Navbar = () => {
    return (
        <div className='bg-Primary_Color'>
            <div className="container mt-0 navbar">

                {/* WebPage Logo  */}
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Fast Fashion</a>
                </div>

                <div className="navbar-end">
                    {/* Mobile dropdown: visible below lg */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <button className="btn btn-ghost btn-circle">
                            <FaBars className="text-2xl text-White_Color" />
                        </button>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-Primary_Color rounded-box z-10 mt-3 w-52 p-2 shadow right-0 text-White_Color"
                        >
                            {UserNavItems}
                        </ul>
                    </div>

                    {/* Desktop navbar: hidden below lg */}
                    <ul className="menu menu-horizontal px-1 hidden lg:flex text-White_Color">
                        {UserNavItems}
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Navbar;
