import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/ProductPage', label: 'Shop' },
        { to: '/AboutUS', label: 'AboutUS' },
        { to: '/ContactPage', label: 'Contact' },
        { to: '/customerReview', label: 'Feedback' },
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
    return (
        <div className='container'>

            <div>
                <div className='text-2xl font-bold'>Menu</div>
                <div className='flex justify-cente flex-col gap-1'>
                    {UserNavItems}
                </div>
            </div>

        </div>
    );
};

export default Footer;