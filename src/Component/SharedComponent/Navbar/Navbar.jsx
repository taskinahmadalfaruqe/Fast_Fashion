import React from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import { handelDarkMood } from '../../DarkMood/DarkControl';

const Navbar = () => {
    return (
        <div className='container'>
            <button
                onClick={handelDarkMood}
                aria-label='Toggle Dark Mode'
                className='bg-Primary_Color text-white text-3xl p-5'
            >
                <CiDark className='inlinr dark:hidden' />
                <CiLight className='hidden dark:inline' />
            </button>
        </div>
    );
};

export default Navbar;
